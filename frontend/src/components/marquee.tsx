const Marquee = () => {
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
    <div className="overflow-hidden bg-black text-white py-4">
      {/* <h1 className="text-center font-medium mb-3">Travel Partners</h1> */}

      <div className="flex w-max text-2xl animate-marquee gap-10 m-4">
        {[...partners, ...partners].map((partner, index) => (
          <span key={index} className="px-4">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
