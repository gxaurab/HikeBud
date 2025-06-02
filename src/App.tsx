import { Route, Routes } from "react-router-dom"
import Documentation from "./pages/Documentation"
import Gallery from "./pages/Gallery"
import { Code } from "./pages/Code"
import Hero from "./pages/Hero"
import Navbar from "./components/navbar"
import Marquee from "./components/marquee"
import PopularHike from "./pages/popularHike"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <Marquee/> 
            <PopularHike/>
          </>
        }/>
        <Route path="/documentation" element={<Documentation/>}/>
        <Route path="/code" element={<Code/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}
export default App
