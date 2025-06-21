import React from "react";
import { Orbitron } from "next/font/google";
import one from "@/images/1.jpg";
import two from "@/images/2.jpg";
import logo from "@/images/logo.png";
import Marquee from "react-fast-marquee";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const images = [one, two, one, two, one];

// Replace with any stock image URL
const backgroundImageUrl =
  "https://images.unsplash.com/photo-1664911200744-8c3a496baa2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HeroSection = () => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with 50% opacity */}
      <img
        src={backgroundImageUrl}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full object-cover bg-black backdrop-blur-4xl opacity-50 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col gap-20 p-10 items-center h-full px-4">
        <img src={logo.src} alt="" className="h-16 object-contain" />
        <div className="flex flex-col items-center justify-center gap-20 h-full">
          <Marquee gradientColor="black">
            {duplicatedImages.map((image, index) => (
              <img
                key={`top-${index}`}
                src={image.src}
                className="mx-5 md:mx-10 h-36 w-48 md:w-96 md:h-48 rounded-2xl object-cover object-top transform skew-x-[-15deg]"
              />
            ))}
          </Marquee>

          <h1
            className={`${orbitron.className} uppercase text-center font-bold text-xl md:text-2xl lg:text-4xl leading-tight px-4 `}
          >
            Bringing Drivers, Teams and Championships Together
          </h1>

          <Marquee gradientColor="black" direction="right">
            {duplicatedImages.map((image, index) => (
              <img
                key={`bottom-${index}`}
                src={image.src}
                className="mx-5 md:mx-10 h-36 w-48 md:w-96 md:h-48 rounded-2xl object-cover object-top transform skew-x-[15deg]"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
