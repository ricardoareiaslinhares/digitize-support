"use client"
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import text from "@/data/text.json";
import { language } from "@/utils/language";


export default function TitleTypingEffect() {
  const typedRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);



  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Psicologia Digital: Compreenda-se", "Psicologia Digital: Evolua"], 
      typeSpeed: 50,
      backSpeed: 30, 
      backDelay: 1700, 
      loop: false,
      showCursor: false,
      cursorChar: "|",
      startDelay: 600,
     
    });

    const cursorTimeout = setTimeout(() => {
      setShowCursor(false);
    }, 8000);

    return () => {
      typed.destroy();
      clearTimeout(cursorTimeout);
    };
  }, []);

  return (
    <h1 className="  text-6xl  font-patrick font-bold  text-center md:text-left md:ml-4 mb-4 drop-shadow-md text-white uppercase  ">
      <span ref={typedRef}></span>
      {showCursor && <span className="typed-cursor">|</span>}
    </h1>
  );
}

