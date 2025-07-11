import ContactForm from "../components/ContactForm"
import { motion } from "framer-motion"


const ContactPage = () => {
  return (
    <div className="bg-lime-50 p-2">
        <motion.h1 
        initial= {{opacity:0, y: 100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1.5}}
        viewport={{once:true}}
        className='
          text-4xl bg-lime-50 p-2 mb-3 sm:text-4xl text-center font-medium'>Contact Our Team
          </motion.h1>
        <ContactForm/>
    </div>
  )
}

export default ContactPage