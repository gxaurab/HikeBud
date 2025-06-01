import { Route, Routes } from "react-router-dom"
import Documentation from "./pages/Documentation"
import Gallery from "./pages/Gallery"
import { Code } from "./pages/Code"
import Hero from "./pages/Hero"
import Navbar from "./components/navbar"
import Marquee from "./components/marquee"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <Marquee/> 
          </>
        }/>
        <Route path="/documentation" element={<Documentation/>}/>
        <Route path="/code" element={<Gallery/>}/>
        <Route path="/gallery" element={<Code/>}/>
      </Routes>
    </>
  )
}
export default App
