import type { Hike } from "../types/hike"

const HikeCards = ({ title, location, difficulty, attractions, price,image}:Hike)=>{
  return (
    <section 
    className="
    bg-white 
    shadow-xl 
    rounded-2xl 
    p-2 h-auto 
    hover:transition-transform hover:scale-105 
    duration-200 ease-in-out
    w-[22.5rem]"
      >
      <img src={image} alt={title} className="w-full h-55 rounded-xl mb-3" />
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <h2 className="text-sm text-gray-600 mb-1">📍 {location} </h2>
        <span className=" text-sm mb-2 font-medium"><b>Attractions:</b></span> {attractions.join(", ")}

        <div >
          <p className="text-sm bg-amber-200 inline-block p-0.5 rounded-full hover:scale-110 transition-transform duration-150">
            <span className="font-medium">Difficulty:</span> {difficulty}
          </p>
          <p className="text-sm p-0.5 ml-1 inline-block bg-green-300 rounded-full hover:scale-110 transition-transform duration-150">
            <span className="font-medium">Price:</span> ${price}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HikeCards