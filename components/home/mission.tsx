import Image from "next/image";
import MissionImage from "public/img/missionImage.png";

export default function MissionSection() {
  return (
    <div className="w-full mt-40 relative mb-40">
      <div
        className="w-full absolute bottom-0 h-2/6 lg:block hidden"
        style={{
          background: "#2C2C2C",
          border: "1px solid #707070",
        }}
      ></div>
      <div className="container mx-auto">
        <h2 className="text-6xl text-yellow-400 font-bold uppercase text-center align-center opacity-75">
          Missions
        </h2>
        <div className="relative">
          <img
            src="/quotationMark.png"
            className="absolute w-50 h-50 left-12 -top-10"
          />
          <p className="text-2xl md:text-5xl text-gray-400 text-center align-center mt-10 leading-normal">
            “To inspire more students and make them more interested in the STEAM
            field and business, and to encourage high school students to develop
            knowledge on science and technology”
          </p>
        </div>
        <div className="w-full grid grid-cols-11">
          <div className="col-span-1 lg:block hidden"></div>

          <div
            id="missionImage"
            className="col-span-9 overflow-hidden relative mt-20 lg:block hidden"
            style={{
              height: "670px",
              maxHeight: "670px",
            }}
          >
            <Image
              alt="mission image"
              src={MissionImage}
              placeholder="blur"
              className="w-full absolute top-0 bottom-0 my-auto"
            />
          </div>
          <div className="col-span-1 lg:block hidden"></div>
        </div>
      </div>
    </div>
  );
}
