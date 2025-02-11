"use client";
import React from "react";
import Image from "next/image";
type Props = {};
import { motion, inView, useInView } from "framer-motion";
import { useRef } from "react";

const ReactangleCard = (props: Props) => {
  const refImage = useRef(null);
  const isInViewImage = useInView(refImage, { once: true });
  const refText = useRef(null);
  const isInViewText = useInView(refText, { once: true });

  return (
    <div className="">
      <div className="w-full min-h-[400px] flex flex-1 flex-row justify-end items-center mt-20">
        <motion.div
          ref={refText}
          initial={{ x: -150, opacity: 0 }}
          animate={isInViewText ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="z-10 "
        >
          <div className="flex w-[600px] h-[200px] bg-slate-100 transform translate-x-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            veniam quas modi, dolorem eos corrupti nulla provident iste quam
            accusantium ab a, ea qui sapiente cum eum praesentium, iusto culpa.
          </div>
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
