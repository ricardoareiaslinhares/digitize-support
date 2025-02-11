"use client"
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import text from "@/data/text.json";
import { language } from "@/utils/language";


export default function TitleTypingEffect() {
  const typedRef = useRef<HTMLSpanElement | null>(null)
  const [showCursor, setShowCursor] = useState(false);



  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        `${text[language].slogan_2}`, 
        `${text[language].slogan_3}`
      ], 
      typeSpeed: 50,
      backSpeed: 30, 
      backDelay: 600, 
      loop: false,
      showCursor: false,
      cursorChar: "|",
      startDelay: 1500,
      onComplete: () => {
        setTimeout(() => {
          if (typedRef.current ) {
            typedRef.current.innerHTML  += "."; // Adds the last char "." with a delay
          }
        }, 800);
      },
     
    })  
      const cursorTimeoutInit = setTimeout(() => {
      setShowCursor(true);
    }, 500);   
     const cursorTimeout = setTimeout(() => {
      setShowCursor(false);
    }, 6000);

    return () => {
      typed.destroy();
      clearTimeout(cursorTimeoutInit);
      clearTimeout(cursorTimeout);

    };
  }, []);

  return (
    <h1 className="min-h-[120px]  text-6xl  font-patrick font-bold  text-center md:text-left md:ml-4 mb-4 drop-shadow-md text-white uppercase  ">
      {text[language].slogan_1 }<br></br>
      <span ref={typedRef}></span>
      {showCursor && <span className="typed-cursor">|</span>}
    </h1>
  );
}

