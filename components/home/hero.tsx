export default function HeroSection() {
  return (
    <div className="w-full relative">
      <div
        id="heroBg"
        className="w-full bg-cover bg-gray-700 bg-center"
        style={{
          backgroundImage: "url(/img/C0010T01.JPG)",
          height: "80vh",
        }}
      ></div>
      <div
        id="boxDescHero"
        className="absolute bottom-0 container mx-auto px-2 right-0 left-0 h-28 grid grid-cols-11"
      >
        <div
          className="col-span-11 lg:col-span-8 xl:col-span-6 px-8 py-8"
          style={{
            background: "#2C2C2C",
          }}
        >
          <h1 className="font-bold text-4xl text-yellow-400">
            We Are JavaKnights
          </h1>
          <p className="text-gray-400 mt-4">Students of TechnoNatura</p>
        </div>
        <div className="xl:col-span-5 lg:col-span-3 text-end py-11 font-medium text-gray-300">
          <div className="">
            2019 ... US | 1{" "}
            <div
              className="bg-gray-400 inline-block mx-2"
              style={{
                width: "100px",
                height: "10px",
              }}
            >
              <div
                className="bg-gray-200"
                style={{
                  width: "10%",
                  height: "100%",
                }}
              ></div>
            </div>{" "}
            3
          </div>
        </div>
      </div>
    </div>
  );
}
