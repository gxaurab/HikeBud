from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Load dataset
treks = pd.read_csv('treks.csv')

# Map Trip Grade to numeric values
difficulty_map = {'Easy': 1, 'Moderate': 2, 'Moderate+Demanding': 3, 'Demanding': 4}
treks['Trip Grade'] = treks['Trip Grade'].map(difficulty_map)

# Handle missing values
treks = treks.fillna({'Days': treks['Days'].mean(), 'Cost': treks['Cost'].mean(), 'Altitude': treks['Altitude'].mean(), 'Trip Grade': 2})

@app.route('/api/treks/recommend', methods=['POST'])
def recommend():
    try:
        # Get user inputs
        user_input = request.json
        days, cost, altitude = float(user_input['days']), float(user_input['cost']), float(user_input['altitude'])

        # Prepare user vector
        user_vector = np.array([[days, cost, altitude]])

        # Prepare trek vectors
        trek_vectors = treks[['Days', 'Cost', 'Altitude']].values

        # Compute cosine similarity
        similarities = cosine_similarity(user_vector, trek_vectors)
        top_indices = similarities[0].argsort()[-5:][::-1]  # Top 5 treks

        # Return trek details (removed Region)
        result = treks.iloc[top_indices][['Name', 'Days', 'Cost', 'Trip Grade', 'Altitude']].to_dict('records')
        return jsonify({'treks': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)