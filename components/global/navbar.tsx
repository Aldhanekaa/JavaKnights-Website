"use client";
import { Instagram, Youtube, Tiktok } from "@icon-park/react";
import Image from "next/image";
import JavaknightsLogo from "public/JKLogo.png";

export default function NavbarGlobal() {
  return (
    <div className="w-full">
      <div className="container px-2 md:px-0 mx-auto grid grid-rows-3 grid-cols-11">
        <div className="row-span-1 col-span-6 md:col-span-4 text-gray-500 flex items-center">
          Follow us on{" "}
          <div className="flex ml-2 gap-2 items-center">
            <Youtube
              size="2em"
              className="hover:text-gray-400 cursor-pointer"
            />
            <Instagram
              size="1.6em"
              className="hover:text-gray-400 cursor-pointer"
            />
            <Tiktok
              size="1.5em"
              className="hover:text-gray-400 cursor-pointer"
            />
          </div>
        </div>
        <div
          id="navbarLogo"
          className="relative hidden md:block md:row-span-3 col-span-3"
        >
          <div className="absolute top-0 z-10 w-5/6 right-0 left-0 mx-auto">
            <Image
              alt="javaKnightsLogo"
              src={JavaknightsLogo}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="row-span-1 flex items-center justify-end col-span-5 md:col-span-4 text-end text-gray-500">
          #7719TEAM — 2023 Season!
        </div>
        <div
          className="mt-4 row-span-1 col-span-11 md:col-span-4 h-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(208, 183, 19, 0.1) 0%, #D0B713 42.33%, #D0B713 65.92%, rgba(208, 183, 19, 0.2) 84.67%)",
          }}
        ></div>
        <div
          className="mt-4 row-span-1 col-span-4 h-1 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(208, 183, 19, 0.1) 0%, #D0B713 42.33%, #D0B713 65.92%, rgba(208, 183, 19, 0.2) 84.67%)",
          }}
        ></div>
        <div
          className="mb-8 hidden md:flex md:justify-between row-span-1 col-span-11 md:col-span-4 uppercase text-2xl text-gray-400"
          style={{
            letterSpacing: "5px",
          }}
        >
          <div>home</div>
          <div>HISTORY</div>
          <div>MEMBERS</div>
        </div>
        <div
          className="mb-8 hidden md:flex justify-between row-span-1 col-span-4 uppercase text-2xl text-gray-400"
          style={{
            letterSpacing: "5px",
          }}
        >
          <div>news</div>
          <div>networks</div>
          <div>more</div>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-700"></div>
    </div>
  );
}
