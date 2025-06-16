import React from "react";
import { Orbitron, Space_Grotesk } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const images = [
  "https://upload.wikimedia.org/wikipedia/en/f/f6/F4_British_Championship_logo.jpeg",
  "https://upload.wikimedia.org/wikipedia/en/f/f6/F4_British_Championship_logo.jpeg",
  "https://upload.wikimedia.org/wikipedia/en/f/f6/F4_British_Championship_logo.jpeg",
  "https://upload.wikimedia.org/wikipedia/en/f/f6/F4_British_Championship_logo.jpeg",
  "https://upload.wikimedia.org/wikipedia/en/f/f6/F4_British_Championship_logo.jpeg",
];

const Partnerships = () => {
  return (
    <div className="flex bg-white p-10 flex-col items-center">
      <h1
        className={`${orbitron.className} text-center text-black font-bold text-3xl`}
      >
        PARTNERSHIPS & PROMOTIONS
      </h1>
        <div
          className="bg-[#0090FF] w-36 h-1 my-4"
          style={{
            boxShadow: '0 0 24px 8px #0090FF88, 0 0 60px 16px #0090FF22',
          }}
        ></div>
      <div className="flex gap-20 py-10">
        {images.map((image, index) => (
          <img src={image} alt="" className="h-20" key={index}/>
        ))}
      </div>
      <div
        className={`${inter.className} text-black tracking-tighter mt-4 space-y-4 text-center`}
      >
        <p>
          Racekraft GB promoted the FIA certified Indian F4 and Formula Regional Indian Championships across the United Kingdom and Europe by making appearances at rounds of the GB3 and GB4 Championships, F4 British, Spanish, Italian, and French Championships, Formula Regional European Championship, and Euroformula Open, as well as at the prestigious Goodwood Festival of Speed and 24 Hours of Spa.
        </p>
        <p>
          Racekraft GB manages the title partnership between leading European single seater team MP Motorsport and leading professional Indian motorsport team Hyderabad Blackbirds of India for the FIA certified Formula Regional Middle Eastern Championship.
        </p>
      </div>
    </div>
  );
};

export default Partnerships;
