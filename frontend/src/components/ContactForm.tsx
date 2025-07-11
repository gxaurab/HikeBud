import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha"
import { motion } from 'framer-motion';
import { useRef,useEffect } from 'react';
import FormSuccess from './Modal/FormSuccess';


const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrbkrbyq");
  const [captchaVal, setCaptchaVal] = useState<string | null>("")
  const [flashModal, setFlashmodal] = useState<boolean>(false)

  const formRef = useRef<HTMLFormElement>(null)
  const captchaRef = useRef<ReCAPTCHA>(null)

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaVal(token || "");
  };
  
  const displayFlash = ()=>{
    setFlashmodal(true)
  }

  useEffect(() => {
    if (flashModal) {
      const timer = setTimeout(() => {
        setFlashmodal(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [flashModal]);

  useEffect(() => {
    if (state.succeeded) {
      displayFlash()

      if(captchaRef.current){
        captchaRef.current?.reset()
      }
      if(formRef.current){
          formRef.current?.reset()
    }
  }
    return () => {
      
    };
  }, [state.succeeded]);

  

  return (
    <>
    {flashModal&&<FormSuccess/>}

      <motion.form onSubmit={(e) => {
        e.preventDefault();
        
        if (!captchaVal) {
          alert("Please complete the reCAPTCHA");
          return;
      }
      handleSubmit(e);
      }} 

      initial= {{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.5}}
      viewport={{once:true}}
      ref={formRef}
      className="
        flex flex-col gap-4 bg-yellow-50 p-5 rounded-xl shadow-xl max-w-xl mx-auto">

        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" required className="p-2 border rounded" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required className="p-2 border rounded" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required className="p-2 border rounded" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <ReCAPTCHA ref={captchaRef} sitekey="6LeJsHArAAAAAHKPrv1pdo_4Kme6Y-AoFvOTmCWa" onChange={handleCaptchaChange}/>

        <button type="submit" disabled={state.submitting}
          className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 w-fit mx-auto">
          Submit
        </button>
      </motion.form>
    </>
  );
};

export default ContactForm;
