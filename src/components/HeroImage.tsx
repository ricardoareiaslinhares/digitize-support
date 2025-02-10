import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroImage() {
  const [scale, setScale] = useState(1.1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1.1 + scrollY * 0.0002; 
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Image
      width={0}
      height={0}
      //loading='lazy'
      priority={true}
      sizes="100vw"
      src="/hero.jpg"
      alt="hero"
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.1s ease-out",
      }}
      className="bg-cover bg-center bg-no-repeat absolute -z-1 object-cover w-full h-full brightness-90 transition-transform duration-200"
    />
  );
}
