import type { Hike } from "../types/hike"

const HikeCards = ({id, title, location, difficulty, attractions, price,image}:Hike)=>{
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-80 hover:scale-105 transition-transform duration-300 ">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-3" />
      <h1 className="text-xl font-semibold">{title}</h1>
      <h2 className="text-sm text-gray-600 mb-1">📍 {location}</h2>
      <p className="text-sm mb-2 ">
        <span className="font-medium">Attractions:</span> {attractions.join(", ")}
      </p>
      <p className="text-sm bg-amber-200 inline-block p-0.5 rounded-full hover:scale-110 transition-transform duration-150">
        <span className="font-medium">Difficulty:</span> {difficulty}
      </p>
      <p className="text-sm p-0.5 inline-block bg-green-300 rounded-full hover:scale-110 transition-transform duration-150">
        <span className="font-medium">Price:</span> ${price}
      </p>
    </div>
  );
}

export default HikeCards