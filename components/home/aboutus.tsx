"use client";

import { ReactElement } from "react";
import {
  Instagram,
  PhoneTelephone,
  SendEmail,
  Tiktok,
  Youtube,
} from "@icon-park/react";
import { IIconProps } from "@icon-park/react/lib/runtime";
import Image from "next/image";
import AboutUsImage from "public/img/aboutUs.png";

export declare type Icon = ReactElement<IIconProps>;

interface SocialMediaI {
  // IconSocial;
  name: string;
  link: string;
  children: JSX.Element;
}

function SosialMedia({ name, link, children }: SocialMediaI) {
  return (
    <div className="col-span-2 flex items-center text-gray-400 mb-5">
      <span className="text-3xl mr-2 text-gray-300">{children}</span>
      {name}
    </div>
  );
}

export default function Aboutus() {
  return (
    <div className="w-full pt-6 mt-60 pb-60">
      <div className="container mx-auto grid grid-cols-11 grid-rows-2 relative">
        <div className="absolute w-full h-full -z-10">
          <div className="relative grid grid-cols-11 md:grid-rows-2 w-full h-full">
            <div className="col-span-3"></div>
            <div className="col-span-8 row-span-2 relative">
              <div
                className="absolute w-full h-full pb-32 box-content	"
                style={{
                  background: "#2C2C2C",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          id="about_us_image"
          className="relative col-span-11 row-span-1 xl:col-span-5 pt-32 max-h-2 sm:block hidden"
        >
          <div className="absolute w-full">
            <Image
              alt="javaKnightsAboutUsImage"
              src={AboutUsImage}
              placeholder="blur"
            />{" "}
            <div className="relative md:block hidden">
              <div className="bg-yellow-400 w-20 h-20 absolute z-10 rotate-45 -left-10 -top-10"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-10 xl:col-span-5 xl:pt-44 row-span-2 relative mt-0 sm:mt-50 md:mt-28 lg:mt-52 xl:mt-0">
          <div className="mb-20 mr-10 mt-24">
            <Image
              alt="javaKnightsAboutUsImage"
              src={AboutUsImage}
              placeholder="blur"
              className="block sm:hidden"
            />{" "}
          </div>

          <img
            src="/quotationMark.png"
            className="absolute w-50 h-50 right-12"
          />
          <h2 className="text-yellow-400 font-bold text-5xl uppercase">
            About Us
          </h2>
          <p className="text-2xl text-gray-400 mt-8 text-justify pr-10 leading-9">
            Java Knights is a FIRST Robotics Competition team that is from
            Depok, Indonesia which is preparing and encouraging students to
            pursue their interests in their careers on the STEAM field.
            (Science, Technology, Engineering, Art, and Math) Java Knights is a
            part of the R2045 (Short for Rendezvous 2045), an initiative that is
            made for Indonesian teens to learn in the robotics and technology
            field, celebrating the 100th year of independence for Indonesia at
            the year 2045.
          </p>
          <div className="w-full grid grid-cols-5 mt-10">
            <SosialMedia name="098" link="">
              <PhoneTelephone />
            </SosialMedia>
            <SosialMedia name="javaknights" link="">
              <SendEmail />
            </SosialMedia>
            <SosialMedia name="javaknights" link="">
              <Instagram />
            </SosialMedia>
            <SosialMedia name="javaknights" link="">
              <Youtube />
            </SosialMedia>
            <SosialMedia name="javaknights" link="">
              <Tiktok />
            </SosialMedia>
          </div>
        </div>
      </div>
    </div>
  );
}
