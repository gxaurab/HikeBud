import { useState } from 'react';

  const Gallery = () => {
    const [formData, setFormData] = useState({ days: '', cost: '', altitude: '' });
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try {
        const response = await fetch('http://127.0.0.1:5000/api/treks/recommend', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (data.error) {
          setError(data.error);
          setRecommendations([]);
        } else {
          setRecommendations(data.treks);
          setError('');
        }
      } catch (err) {
        setError('Failed to fetch recommendations');
        setRecommendations([]);
      }
    };

    return (
      <div className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Days (e.g., 14)"
            value={formData.days}
            onChange={(e) => setFormData({ ...formData, days: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Budget (USD, e.g., 1500)"
            value={formData.cost}
            onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Max Altitude (m, e.g., 4000)"
            value={formData.altitude}
            onChange={(e) => setFormData({ ...formData, altitude: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Get Treks
          </button>
        </form>

        {error && <p className="text-red-500">{error}</p>}

        {recommendations.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Recommended Treks</h2>
            {recommendations.map((trek) => (
              <div key={trek.Name} className="p-2 border-b">
                <p className="font-semibold">{trek.Name}</p>
                <p>{trek.Days} days, ${trek.Cost}, Altitude: {trek.Altitude}m</p>
                <p>Difficulty: {trek['Trip Grade'] === 1 ? 'Easy' : trek['Trip Grade'] === 2 ? 'Moderate' : 'Moderate+Demanding'}</p>
                <button
                  onClick={() => window.location.href = '/login'}
                  className="text-blue-500 underline mt-1"
                >
                  Save Trek
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default Gallery;