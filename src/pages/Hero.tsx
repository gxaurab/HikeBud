import Video from "../assets/RoundPokhara.mp4";
import Typer from "../components/Typer";

const Hero = () => {
    const partners = [
    "🏔️ Trek Adventures",
    "🎒 Mountain Gear Co",
    "🧭 Trail Blazers",
    "⛰️ Summit Sports",
    "🥾 Hike Pro",
    "🏕️ Camp Elite",
    "📍 Adventure Maps",
    "🌟 Peak Experiences",
    "🚁 Sky Tours",
    "🏞️ Nature Escapes",
  ];


  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4">
        <h1 className="sm:text-2xl  font-medium mb-2">AI Powered</h1>
        <h2 className="text-3xl sm:text-5xl font-semibold mb-6 text-center">
          <Typer/>
        </h2>
        <form className="flex flex-col sm:flex-row gap-4 bg-white/15 p-4 rounded-xl backdrop-blur-md hover:scale-125 duration-300 ease-in ">
          <input
            type="number"
            placeholder="Budget $"
            className="px-4 py-2 rounded-md text-white w-40"
          />
          <input
            type="number"
            placeholder="Days"
            className="px-4 py-2 rounded-md text-white w-40"
          />
          <button
            type="submit"
            className="bg-amber-300 text-black px-6 py-2 rounded-md font-semibold hover:bg-amber-400 transition"
          >
            Find
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
