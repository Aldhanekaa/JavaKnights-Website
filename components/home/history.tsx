"use client";

import { ArrowRight } from "@icon-park/react";
import Image, { StaticImageData } from "next/image";

import History1 from "public/img/history_1.jpeg";
import History2 from "public/img/history_2.jpg";
import History3 from "public/img/history_3.jpg";

interface HistorySectionI {
  description: string[];
  img: StaticImageData;
}

type HistoriesSectionData = HistorySectionI[];

const Histories: HistoriesSectionData = [
  {
    description: [
      `Java Knights successfully achieved the ‘Rookie Inspiration Award’ in the ‘FIRST Robotics Competition (FRC) Southern Cross Regional’ which is held on Sydney, Australia in 2019.`,
      `‘Rookie Inspiration Award’ shows that the Java Knights team succeeded in showing appreciation of advancement in technology and engineering in schools or in communities as a rookie.`,
    ],
    img: History1,
  },
  {
    description: [
      `Java Knights also won the ‘Rookie All-Star Award’ in the ‘FIRST Robotics Competition (FRC) South Pacific Regional’ that is also held in Sydney, Australia in 2019.`,
      `‘Rookie All-Star Award’, in the FRC celebrates success from showing teamwork and collaboration, and also implements FIRST’s mission to inspire students to learn more about science and technology as a rookie.    `,
    ],
    img: History2,
  },
  {
    description: [
      `At 20th April in 2019, the Java Knights team set out to the FRC World Championship that is held in Detroit, USA, after successfully achieving entry from the ‘Rookie All-Star Award’ in the prior FRC South Pacific event that was held in Sydney, Australia.`,
    ],
    img: History3,
  },
];

function HistoryImg({ img }: { img: StaticImageData }) {
  return (
    <>
      <div className="lg:hidden col-span-1 block"></div>
      <div className="col-span-10 lg:col-span-5">
        <Image src={img} alt="ya" placeholder="blur" sizes="100%" />
      </div>
    </>
  );
}

function HistoryDesc({
  description,
  index,
}: {
  description: string[];
  index: number;
}) {
  return (
    <>
      {index % 2 != 0 && <div className="col-span-1 lg:hidden block"></div>}
      <div className="col-span-10 lg:col-span-5 lg:text-3xl md:text-2xl xl:text-4xl text-gray-400 pt-12">
        <div
          className="w-full h-2 mb-16"
          style={{
            border: "1px solid #707070",
            opacity: 0.5,
            background: "#606060",
          }}
        />

        <div className="w-full relative">
          <div
            className="absolute w-14 h-14 rotate-45 bg-yellow-400 lg:block hidden"
            style={{
              [index % 2 == 0 ? "left" : "right"]: "-14%",
            }}
          ></div>

          <div
            className="absolute w-5 h-5 sm:w-8 sm:h-8 rotate-45 bg-yellow-400 block lg:hidden"
            style={{
              left: "-7.5%",
            }}
          ></div>
          <img
            src="/quotationMark.png"
            className="absolute w-50 -top-5 h-50 right-12"
          />
          {description.map((desc, index) => (
            <p className={`${index > 0 && "mt-14"} text-justify`}>{desc}</p>
          ))}
        </div>
      </div>
    </>
  );
}

function HistoryCard({
  index,
  img,
  description,
}: {
  index: number;
  img: StaticImageData;
  description: string[];
}) {
  return (
    <div
      className={`grid grid-cols-11 ${index > 0 && "mt-28"} `}
      key={`${index}-history`}
    >
      {index % 2 == 0 ? (
        <>
          <HistoryImg img={img} />

          <div className="col-span-1"></div>
          <HistoryDesc description={description} index={index} />
        </>
      ) : (
        <>
          <div className="lg:hidden col-span-1 block"></div>
          <div className="col-span-10 lg:col-span-5 lg:hidden block">
            <Image src={img} alt="ya" placeholder="blur" sizes="100%" />
          </div>{" "}
          <HistoryDesc description={description} index={index} />
          <div className="col-span-1"></div>
          <div className="col-span-10 lg:col-span-5 lg:block hidden">
            <Image src={img} alt="ya" placeholder="blur" sizes="100%" />
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default function HistorySection() {
  return (
    <div className="w-full relative container mx-auto pt-52 overflow-hidden pb-72">
      <div className="absolute w-full bottom-0 pl-12 lg:pl-0 font-medium lgt:text-center z-10">
        <div className="relative">
          <p className="text-xl lg:text-center lg:text-3xl text-gray-300">
            There is lot more from us
          </p>
          <div className="flex justify-start lg:justify-center">
            <a
              className="bg-gray-600 hover:bg-gray-700 text-gray-400 w-auto px-4 py-2 mt-3 cursor-pointer"
              href="/history"
            >
              Read Full Story <ArrowRight />
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-center align-center text-5xl text-gray-300 font-bold">
        OUR BRIEF HISTORY
      </h2>
      <div className="flex w-full justify-center mt-16 mb-24">
        <div
          className="w-7/12 h-1 align-center"
          style={{
            background: `linear-gradient(90deg, rgba(208, 183, 19, 0.1) 0%, #D0B713 42.33%, #D0B713 65.92%, rgba(208, 183, 19, 0.2) 84.67%);`,
          }}
        ></div>
      </div>
      <div className="w-full h-full absolute grid grid-cols-11 overflow-hidden">
        <div className="hidden lg:block col-span-5" />
        <div className="col-span-1 flex justify-center">
          <div
            className="w-2"
            style={{
              background: `linear-gradient(180deg, #646464 66%, rgba(100, 100, 100, 0) 100%)`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full flex flex-col pt-10 pr-10 lg:pr-0">
        {Histories.map((data, index) => (
          <HistoryCard {...data} index={index} />
        ))}
      </div>
    </div>
  );
}
