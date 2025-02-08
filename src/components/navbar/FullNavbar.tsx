"use client";
import React, { useEffect, useState } from "react";
import NavbarShad from "./NavbarShad";
import Logo from "./Logo";
import { Drawer } from "./Drawer";
import { language } from "@/utils/language";
import text from "@/data/text.json";
import { LinkType } from "@/types";

type Props = {};

const FullNavbar = ({}: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const myLinks: LinkType[] = [
    { name: "Inicial", href: "/" },

    {
      name: text[language].navbar.servicos.title,
      link: [
        {
          name: text[language].navbar.servicos.link1,
          href: "/servicos/consultas",
        },
        {
          name: text[language].navbar.servicos.link2,
          href: "/servicos/preparacao",
        },
      ],
    },
    { name: text[language].navbar.preços, href: "/pricing" },
    { name: text[language].navbar.sobre.title, href: "/about" },

    { name: text[language].navbar.blog, href: "/blog" },
  ];

  return (
    <nav
      className={`flex h-16 sticky top-0 left-0 flex-row w-full z-50 justify-between items-center px-8 bg-background/0  transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <Logo />
      <span>
        <NavbarShad myLinks={myLinks} scrolled={scrolled} />
        <Drawer myLinks={myLinks} />
      </span>
    </nav>
  );
};

export default FullNavbar;
