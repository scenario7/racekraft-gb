import React from "react";
import { Space_Grotesk, Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const IndianRacingLeague = () => {
  return (
    <div className="flex flex-col items-center px-10 py-10 bg-black">
      <div className="flex gap-10 items-center h-full">
        <img src="https://cdn.siasat.com/wp-content/uploads/2022/11/shvbsvs.jpg" alt="" className="h-full w-1/3 object-fill rounded-2xl hidden md:block"/>
        <div className="flex flex-col justify-between">
          <img src="https://cdn.siasat.com/wp-content/uploads/2022/11/shvbsvs.jpg" alt="" className="h-32 object-cover object-top rounded-2xl"/>
          <h1 className={`${orbitron.className} text-2xl font-bold text-center py-10`}>SCOUTING FOR THE <br/> <span className="text-orange-500">INDIAN</span> RACING <span className="text-green-500">LEAGUE</span></h1>
          <img src="https://cdn.siasat.com/wp-content/uploads/2022/11/shvbsvs.jpg" alt="" className="h-32 object-cover object-top rounded-2xl"/>
        </div>
        <img src="https://cdn.siasat.com/wp-content/uploads/2022/11/shvbsvs.jpg" alt="" className="h-full w-1/3 object-contain rounded-2xl hidden md:block"/>
      </div>
      <p className={`${inter.className} text-white tracking-tight text-center mt-10`}>
        Racekraft GB was awarded the contract to scout six international female racing drivers for the inaugural season of the Indian Racing League, a unique series which features city-based franchise teams battling it out on track. With men and women racing on an equal platform, with 15 races across five rounds, it is India’s first and only four-wheel racing league. In addition, the team also managed to scout an international male driver for the series.
      </p>
    </div>
  );
};

export default IndianRacingLeague;
