"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
type Props = {};
import text from "@/data/text.json";
import { language } from "@/utils/language";
import CardMain from "../cards/CardMain";
import { Button } from "../ui/button";
import { time } from "console";

const Hero = ({}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // make a timeout function
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    // clear the timeout function
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-row w-full min-h-[580px]  overflow-hidden justify-center relative pb-8 -mt-16 ">
      <Image
        width={0}
        height={0}
        //loading='lazy'
        priority={true}
        sizes="100vw"
        src="/hero.jpg"
        alt="hero"
        className="bg-cover bg-center bg-no-repeat absolute -z-1 object-cover w-full h-full brightness-90"
      />
      <div className="z-10 flex  flex-col gap-8 max-w-7xl items-center sm:items-start justify-center mt-20">
        <div className="flex flex-col gap-y-4 max-w-md  sm:max-w-max items-center md:items-start ">
          <h1 className="text-7xl  font-patrick font-bold italic text-center md:text-left md:ml-4 mb-4 drop-shadow-md text-white  ">
            {text[language].slogan}
          </h1>
          <div className="flex flex-col justify-center sm:ml-8 gap-4 drop-shadow-sm max-w-[500px]  ">
            <p className=" text-lg sm:text-xl text-white   ">
              <strong className="leading-8">
              {text[language].companyDesc}
              </strong>
            </p>

            <Button variant={"outline"} size={"lg"} className="w-full">
              saber mais
            </Button>
          </div>
        </div>
        <span className="flex flex-1 flex-wrap max-w-lg  md:max-w-max lg:flex-nowrap gap-16 justify-center items-center self-center px-3 sm:px-12  ">
          <CardMain
            animate={true}
            isVisible={isVisible}
            title={text[language].card1Title}
            desc={text[language].card1Desc}
            link="/servicos/consultas"
            imageUrl="/saude.png"
          />

          <CardMain
            animate={true}
            isVisible={isVisible}
            title={text[language].card2Title}
            desc={text[language].card2Desc}
            link="servicos/preparacao"
            imageUrl="/rh.png"
          />
        </span>
      </div>
    </div>
  );
};

export default Hero;
