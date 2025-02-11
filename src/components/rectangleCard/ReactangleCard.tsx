"use client";
import React, { use, useCallback, useEffect, useState } from "react";
import Image from "next/image";
type Props = {};
import { motion, inView, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";
import useWindowSize from "@/lib/useWindowSize";

const ReactangleCard = (props: Props) => {
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage, { once: true });
  const refText = useRef(null);
  const isInViewText = useInView(refText, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  const width = useWindowSize();
  const isMobile = width < 640 && width !== 0;


const handleHovered = () => {
  setIsHovered(!isHovered);
  console.log(isMobile)
  console.log(width)
}

  return (
    <div className="">
      <div className="w-full min-h-[400px] flex flex-1 flex-col-reverse sm:flex-row justify-center sm:justify-end items-center mt-12">
        <motion.div
          ref={refText}
          initial={{ x: -150, opacity: 0 }}
          animate={isInViewText ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="z-10 "
        >
          <motion.div
            whileHover={{ height: 340 }}
            transition={{ duration: 0.3 }}
            className=" overflow-hidden -translate-y-12 sm:-translate-y-0 sm:translate-x-12 flex  bg-slate-200 flex-1 flex-col justify-center items-center mx-12 sm:mx-0"
            onMouseEnter={() => handleHovered()}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className="w-full  sm:m-0 md:w-[600px] md:h-[100px] text-center p-4  ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              veniam quas modi, dolorem eos corrupti nulla provident iste quam
              accusantium ab a, ea qui sapiente cum eum praesentium, iusto
              culpa. {width}
            </p>
            <motion.div
              initial={{
                opacity: isMobile ? 1 : 0,
                y:isMobile ? 0 : -10,
                position: isMobile ? "relative" : "absolute",
                color: isMobile ? "black" : "transparent",
              }} 
              animate={{
                opacity: isMobile ? 1 : isHovered ? 1 : 0,
                y: isMobile ? 0 : isHovered ? 0 : -10,
                color: isMobile ? "black" : isHovered ? "black" : "transparent",
                position: isMobile ? "relative" : isHovered ? "relative" : "absolute",
              }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="opacity-1 text-center  sm:opacity-0 flex flex-1 sm:flex-none"
            >
              <p className=" w-full mx-6 sm:m-0 md:w-[600px] text-center p-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          ref={refImage}
          initial={{ x: 150, opacity: 0 }}
          animate={isInViewImage ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="-z-1"
        >
          <Image
            width={0}
            height={0}
            //loading='lazy'
            priority={true}
            sizes="100vw"
            src="/hero.jpg"
            alt="hero"
            className="bg-cover bg-center bg-no-repeat  object-cover w-[500px] h-[300px] brightness-90 transition-transform duration-200"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ReactangleCard;

