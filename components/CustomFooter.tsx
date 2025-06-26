import React from "react";
import logo from "@/images/logo.png";
import { Space_Grotesk } from "next/font/google";

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const CustomFooter = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row md:gap-0 items-center md:justify-between p-5 md:p-10">
      <div className="md:hidden">
        <img src={logo.src} alt="" className="w-48 pb-10" />
      </div>
      <div className="">
        <p
          className={`${inter.className} text-center tracking-tight text-white`}
        >
          27 Old Gloucester Street
          <br />
          London
          <br />
          WC1N 3AX
          <br />
          United Kingdom
        </p>
        <div className="flex justify-center mt-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
            alt="UK Flag"
            className="w-8 h-5"
          />
        </div>
      </div>
      <div className="pb-5 md:pb-0">
        <img src={logo.src} alt="" className="w-48 hidden md:block" />
      </div>
      <div className="">
        <a
          href="mailto:hello@racekraftgb.com"
          className={`${inter.className} text-center tracking-tight text-gray-500`}
        >
          hello@racekraftgb.com
        </a>
      </div>
    </div>
  );
};

export default CustomFooter;
