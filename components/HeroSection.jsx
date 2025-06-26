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

const images = [
  one,
  two,
  one,
  two,
  one,
  one,
  two,
  one,
  two,
  one,
  one,
  two,
  one,
  two,
  one,
];

// Replace with any stock image URL
const backgroundImageUrl =
  "https://images.unsplash.com/photo-1679865745026-24ca998bee72?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with 50% opacity */}
      <img
        src={backgroundImageUrl}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover grayscale z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full object-cover bg-gradient-to-b from-black to-black via-black/50 backdrop-blur-4xl z-5" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col gap-20 p-10 items-center h-full px-4">
        <img src={logo.src} alt="" className="h-16 object-contain" />
        <div className="flex flex-col items-center justify-center gap-20 h-full">
          {/* <Marquee gradientColor="black">
            {images.map((image, index) => (
              <div
                key={`top-${index}`}
                className="mx-5 md:mx-10 h-36 w-48 md:w-96 md:h-48 rounded-2xl overflow-hidden transform skew-x-[-15deg] flex items-center justify-center bg-white/10"
              >
                <img
                  src={image.src}
                  className="h-full w-full object-cover object-top transform skew-x-[15deg] scale-110"
                  alt=""
                />
              </div>
            ))}
          </Marquee> */}

          <h1
            className={`${orbitron.className} uppercase text-center text-white font-bold text-xl md:text-2xl lg:text-4xl leading-tight px-4 max-w-[90vw] sm:max-w-3xl break-words`}
          >
            Bringing Drivers, Teams and Championships Together
          </h1>

          {/* <Marquee
            gradientColor="black"
            speed={80}
            delay={0}
            pauseOnHover={false}
            play={true}
          >
            {images.map((image, index) => (
              <div
                key={`bottom-${index}`}
                className="mx-5 md:mx-10 h-36 w-48 md:w-96 md:h-48 rounded-2xl overflow-hidden transform skew-x-[15deg] flex items-center justify-center bg-white/10"
              >
                <img
                  src={image.src}
                  className="h-full w-full object-cover object-top transform skew-x-[-15deg] scale-110"
                  alt=""
                />
              </div>
            ))}
          </Marquee> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HeroSection;
