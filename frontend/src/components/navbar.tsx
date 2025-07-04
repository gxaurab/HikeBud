import { useState } from "react"
import menuIcon from "/burger-menu-svgrepo-com.svg"
import Button from "./button"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion";

const Navbar = () => {

  const[menu, setMenu] = useState<boolean>(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <>
    <nav className={`  top-0 left-0 z-50 w-full backdrop-blur-sm flex justify-between items-center p-4
      ${isHome?"fixed bg-transparent":"sticky bg-black"}`}>
        <div className="text-white  ">
            <Link to="/">
              <h1 className='text-4xl logofont hover:text-blue-400'>HikeBud</h1>
            </Link>
        </div>

        <div className=" hidden md:flex md:flex-row gap-10 text-white">
            <ul className=" logofont m-2 flex text-xl md:text-xl gap-8">
              <Link to="/Documentation"><li className="hover:text-blue-400 cursor-pointer">Documentation</li></Link>
              <Link to="/Gallery"><li className="hover:text-blue-400 cursor-pointer">Gallery</li></Link>
              <Link to="/Code"><li className="hover:text-blue-400 cursor-pointer">Code</li></Link>
            </ul>
          <Button color="logofont text-white" textSize="text-2xl" bg='bg-blue-600' content="Contact"/>
        </div>

        <div className="flex md:hidden items-center gap-4 ">
          <Button color=" text-white" textSize="text-2xl" bg='bg-blue-600' content="Contact"/>
          <button onClick={() => setMenu(!menu)}>
            <motion.img 
              animate={{ rotate: 360, transition: {duration:2} }}
              className="h-7 bg-amber-100/70 w-7 rounded-sm" src={menuIcon} alt="Menu" />
          </button>
        </div>
    </nav>

{menu && (
  <div className={`logofont md:hidden fixed top-16 left-0 w-full bg-white/20 text-white flex flex-col items-center gap-6 py-6 z-50 backdrop-blur-md border-y border-white/20
    `
  }>
    <Link to="/documentation" onClick={() => setMenu(false)}>
      <p className="text-lg font-medium hover:text-blue-400">Documentation</p>
    </Link>
    <Link to="/gallery" onClick={() => setMenu(false)}>
      <p className="text-lg font-medium hover:text-blue-400">Gallery</p>
    </Link>
    <Link to="/code" onClick={() => setMenu(false)}>
      <p className="text-lg font-medium hover:text-blue-400">Code</p>
    </Link>
  </div>
)}

</>
  )}
        


export default Navbar