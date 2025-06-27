import { reviews } from "../assets/Reviews";
import ReviewCard from "../components/ReviewCard";
import { motion } from "framer-motion";


export default function Reviews() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-6">
      <motion.h1
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        className="text-center text-4xl font-bold text-gray-800 mb-6"
      >
        Thanks for Trusting Us
      </motion.h1>

      <div
        className="
          flex
          justify-start lg:justify-center
          gap-6
          overflow-x-auto
          snap-x snap-mandatory
          scrollbar-hide
          px-4 pb-4
        "
      >
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            className="relative z-0 flex-shrink-0 w-72 snap-center hover:z-10"            initial={{ opacity: 0, transform: "translateY(100px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 1.5 }}
          >
            <ReviewCard {...review} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}



// flex: keeps cards in one row.

// overflow-x-auto: lets it scroll sideways when it overflows.

// snap-x snap-mandatory + snap-center on each card: makes each card snap to the center of the viewport as you scroll.

// scrollbar-hide: a tiny plugin (or you can add your own CSS) to hide that ugly scrollbar.