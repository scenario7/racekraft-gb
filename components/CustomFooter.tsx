import React from "react";
import logo from "@/images/logo.png";
import { Space_Grotesk } from "next/font/google";

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const CustomFooter = () => {
  return (
    <div className="bg-black flex items-center justify-between p-10">
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
      </div>
      <div className="">
        <img src={logo.src} alt="" className="w-48" />
      </div>
      <div className="">
        <a
        href="mailto:hello@racekraftgb.com"
          className={`${inter.className} text-center tracking-tight text-white`}
        >
            hello@racekraftgb.com
        </a>
      </div>
    </div>
  );
};

export default CustomFooter;
