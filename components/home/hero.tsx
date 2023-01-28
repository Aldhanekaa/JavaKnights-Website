export default function HeroSection() {
  return (
    <div className="w-full relative h-screen">
      <div
        id="heroBg"
        className="w-full bg-cover bg-gray-700 lg:h-5/6 md:h-2/5 sm:h-2/5 bg-center h-2/6"
        style={{
          backgroundImage: "url(/img/C0010T01.JPG)",
        }}
      ></div>
      <div
        id="boxDescHero"
        className="absolute bottom-32 container mx-auto px-2 right-0 left-0 h-28 grid grid-cols-11"
      >
        <div
          className="col-span-6 px-8 py-8"
          style={{
            background: "#2C2C2C",
          }}
        >
          <h1 className="font-bold text-4xl text-yellow-400">
            We Are JavaKnights
          </h1>
          <p className="text-gray-400 mt-4">Students of TechnoNatura</p>
        </div>
        <div className="col-span-5 text-end py-5 font-medium text-gray-300">
          2019 ... US — 1 / 3
        </div>
      </div>
    </div>
  );
}
