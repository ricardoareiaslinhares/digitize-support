"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
type Props = {};
import { motion, inView, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";

const ReactangleCard = (props: Props) => {
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage, { once: true });
  const refText = useRef(null);
  const isInViewText = useInView(refText, { once: true });
  const [isHovered, setIsHovered] = useState(false);

 

  return (
    <div className="">
      <div className="w-full min-h-[400px] flex flex-1 flex-row justify-end items-center mt-12">
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
            className=" overflow-hidden translate-x-12 flex items-center bg-slate-200 flex-1 flex-col justify-center "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className="w-[600px] h-[100px] text-center p-4 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              veniam quas modi, dolorem eos corrupti nulla provident iste quam
              accusantium ab a, ea qui sapiente cum eum praesentium, iusto
              culpa.
            </p>
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                position: "absolute",
                color: "transparent",
              }} // Hidden by default
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : -10,
                color: isHovered ? "black" : "transparent",
                position: isHovered ? "relative" : "absolute",
              }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="opacity-0 text-center mt-4"
            >
              <p className=" w-[600px] text-center p-4">
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
