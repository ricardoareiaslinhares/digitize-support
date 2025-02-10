import React from "react";
import Image from "next/image";
type Props = {};

const ReactangleCard = (props: Props) => (
    <div className="">

  <div className="w-full min-h-[400px] flex flex-1 flex-row justify-end items-center">
    <div className="z-10 flex w-[600px] h-[200px] bg-slate-100 transform translate-x-12">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum veniam
      quas modi, dolorem eos corrupti nulla provident iste quam accusantium ab
      a, ea qui sapiente cum eum praesentium, iusto culpa.
    </div>
    <Image
      width={0}
      height={0}
      //loading='lazy'
      priority={true}
      sizes="100vw"
      src="/hero.jpg"
      alt="hero"
      className="bg-cover bg-center bg-no-repeat -z-1 object-cover w-[500px] h-[300px] brightness-90 transition-transform duration-200"
      />
      </div>
  </div>
);

export default ReactangleCard;
