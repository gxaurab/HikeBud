import Video from "../assets/RoundPokhara.mp4";
import Typer from "../../utils/Typer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect,useRef } from "react";

const Hero = () => {
  const navigate = useNavigate()
  const ref = useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/code')
  }

  useEffect(() => {
    ref.current?.focus()
  }, []);


  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4">
        <h1 className="sm:text-2xl font-medium mb-2">AI Powered</h1>
        <h2 className="text-3xl sm:text-5xl font-semibold mb-6 text-center">
          <Typer/>
        </h2>
        <motion.form 
            initial = {{opacity: 0, transform:"translateY(100px)"}}
            animate={{opacity: 1, transform:"translateY(0px)"}}
            transition={{duration:1.5}}
            className="flex flex-col sm:flex-row gap-4 bg-white/15 p-4 rounded-xl backdrop-blur-md hover:scale-115 duration-300 ease-in "
        onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Budget $"
            ref={ref}
            className="px-4 py-2 rounded-md text-white w-40"
          />
          <input
            type="number"
            placeholder="Days"
            className="px-4 py-2 rounded-md text-white w-40"
          />
          <button
            type="submit"
            className="bg-amber-300 text-black px-6 py-2 rounded-md font-semibold hover:bg-amber-400 transition">
            Find
          </button>
        </motion.form>


        <div className="absolute bottom-4 left-0 right-0 px-4 z-10">
          
          {/* Mobile Layout - Stacked vertically */}
          <motion.div 
            initial = {{opacity: 0, transform:"translateY(100px)"}}
            animate={{opacity: 1, transform:"translateY(0px)"}}
            transition={{duration:1.5}}
            className="block sm:hidden">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 mb-0">
              <div className="text-center">
                <div className="text-amber-300 text-sm font-bold mb-2">🏆 Award Winner</div>
                <div className="flex justify-around text-xs">
                  <span className="text-white">🥾 1.5K+ Hikers</span>
                  <span className="text-white">🏔️ 50+ Trails</span>
                  <span className="text-white">⭐ 4.9/5</span>
                </div>
              </div>
            </div>
            <div>
                <h1 className="text-white text-[12px] text-center">Video Location: Pokhara, Nepal</h1>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 text-center">
              <p className="text-white text-xs">
                ✓ Expert Guidance • ✓ Trail Recommendations<br/>
                <span className="text-amber-200">⚠️ No Insurance • ⚠️ Follow Safety Guidelines</span>
              </p>
            </div>
          </motion.div>

          <motion.div className="hidden sm:flex justify-between items-end"
            initial = {{opacity: 0, transform:"translateY(100px)"}}
            animate={{opacity: 1, transform:"translateY(0px)"}}
            transition={{duration:1.5}}
            >
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <ul className="text-white text-lg space-y-1">
                <li>🥾 1500+ Happy Hikers</li>
                <li>🏔️ 50+ Destinations</li>
                <li>⭐ 4.9/5 Rating</li>
              </ul>
            </div>
            
            <div>
                <h1 className="text-amber-400 text-[13px]">Video location: Pokhara, Nepal</h1>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">🏆</span>
                </div>
                <span className="text-white font-medium">Best Travel Platform</span>
              </div>
              <div className="text-white text-sm space-y-1">
                <p>✓ We provide Expert Guidance</p>
                <p>✓ We recommend Trails & Packages</p>
                <p className="text-amber-200">⚠️ We do not provide Insurance</p>
                <p className="text-amber-200">⚠️ We cannot assure travel safety</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;