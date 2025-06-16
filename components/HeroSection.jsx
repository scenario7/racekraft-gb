import React from 'react'
import { Orbitron } from 'next/font/google'
import one from '@/images/1.jpg'
import two from '@/images/2.jpg'
import Image from 'next/image'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const images = [one, two, one, two, one]

const HeroSection = () => {
  const duplicatedImages = [...images] // duplicate once

  return (
    <div className="w-screen h-screen bg-black flex flex-col gap-20 justify-center items-center">
      {/* Top Carousel */}
      <div className="w-full">
        <div className="flex justify-between">
          {duplicatedImages.map((img, i) => (
            <div key={`top-${i}`} className="flex-shrink-0 w-72 h-48 px-2">
              <img
                src={img.src}
                alt={`Image ${i}`}
                className="w-full h-full object-cover object-top rounded-[25px]"
              />
            </div>
          ))}
        </div>
      </div>

      <h1 className={`${orbitron.className} text-5xl text-white font-bold text-center px-4`}>
        BRINGING DRIVERS, TEAMS AND CHAMPIONSHIPS TOGETHER
      </h1>

      {/* Bottom Carousel */}
      <div className="w-full">
        <div className="flex justify-between">
          {duplicatedImages.map((img, i) => (
            <div key={`bottom-${i}`} className="flex-shrink-0 w-72 h-48 px-2">
              <img
                src={img.src}
                alt={`Image ${i}`}
                className="w-full h-full object-cover object-top rounded-[25px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
