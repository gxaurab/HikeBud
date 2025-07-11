import { hikeDetails } from "../assets/hikeDetails";
import HikeCards from "../components/HikeCards";
import { motion } from "framer-motion";

const PopularHike = () => {
  return (
    <section className="py-9 bg-lime-50">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}
        className="text-center text-4xl font-medium text-gray-800 mb-8"
      >
        Trending Hiking Destinations
      </motion.h1>

      <div
        className="
          flex
          justify-start lg:justify-center
          gap-6
          overflow-x-auto
          overflow-y-hidden 
          snap-x snap-mandatory
          scrollbar-hide
          px-4 pb-4
        "
      >
        {hikeDetails.map((hike, index) => (
          <motion.div
            key={hike.id}
            className="snap-center flex-shrink-0 w-72"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
            viewport={{once:true}}
          >
            <HikeCards {...hike} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default PopularHike;
