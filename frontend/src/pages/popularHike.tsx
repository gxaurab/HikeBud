import { hikeDetails } from "../assets/hikeDetails"
import HikeCards from "../components/HikeCards"

const PopularHike = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-amber-50 to-white">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
            Trending Hiking Destinations
        </h1>
        <div className=" flex flex-wrap sm:flex-nowrap justify-center gap-8 px-4">
            {hikeDetails.map((hike) => (
            <HikeCards key={hike.id} {...hike} />
            ))}
        </div>
        </section>
  )
}

export default PopularHike

