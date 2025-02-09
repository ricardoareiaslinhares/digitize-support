import React from "react";

const ContactButton = () => {
  return (
    <a
      href="/contact/"
      target="_self"
      rel="noopener noreferrer"
      aria-label="Visit contact page"
      className=" rounded-md fixed bottom-6 right-6 z-40 transform translate-y-0 px-4 py-3 sm:bottom-20 sm:right-12 sm:px-4 sm:py-5 uppercase text-heading-5 inline-flex items-center justify-between gap-7 bg-black text-white shadow-brand-green-600 transition duration-300 hover:bg-pink-500 hover:shadow-brand-green-600 active:shadow-brand-green-500 p-5"
    >
      <span className="w-full">
        <span className="flex items-center text-sm sm:text-2.5xl">
          CONTACT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 31 35"
            className="ml-2 h-auto w-5 sm:mt-1.5 sm:w-7.5"
          >
            <g clipPath="url(#message-bubble-right_svg__a)">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M30.793.438h-30v27.3h24l6 6.825V.437m-6 5.687h-18v3.412h18zm-18 5.688h18v3.412h-18zm18 5.687h-18v3.413h18z"
                clipRule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="message-bubble-right_svg__a">
                <path
                  fill="#fff"
                  d="M0 0h30v34.125H0z"
                  transform="translate(.793 .438)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </span>
      </span>
    </a>
  );
};

export default ContactButton;