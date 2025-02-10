"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
type Props = {};
import text from "@/data/text.json";
import { language } from "@/utils/language";
import CardMain from "../cards/CardMain";
import { Button } from "../ui/button";
import TitleTypingEffect from "@/components/Title";
import HeroImage from "../HeroImage";

const Hero = ({}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-row w-full min-h-[580px]  overflow-hidden justify-center relative pb-8 -mt-16  ">
      

    <HeroImage />
      <div className="z-10 flex  flex-col gap-8 max-w-7xl items-center sm:items-start sm:min-w-full  mt-20">
        <div className="flex flex-col gap-y-4 max-w-md  sm:max-w-max items-center md:items-start ">
          <TitleTypingEffect />
              <div className="flex flex-col justify-center sm:ml-8 gap-4 drop-shadow-sm max-w-[500px]  ">
            <p className=" text-lg sm:text-xl text-white leading-8   ">
              {text[language].companyDesc}
            </p>

            <hr className="border-t-2 border-white"/>
          </div>

        </div>
        <p className=" text-xl sm:text-2xl text-white leading-8  text-center self-center font-semibold animate-fade-in ">
        
          {text[language].services}
        </p>
        <span className="flex flex-1 flex-wrap max-w-lg  md:max-w-6xl  lg:flex-nowrap gap-16 justify-center items-center self-center px-3 sm:px-12  ">
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
