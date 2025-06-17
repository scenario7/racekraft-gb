import React from 'react'
import { Orbitron } from 'next/font/google'
import one from '@/images/1.jpg'
import two from '@/images/2.jpg'
import logo from '@/images/logo.png'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const images = [one, two, one, two, one]

// Replace with any stock image URL
const backgroundImageUrl = 'https://images.unsplash.com/photo-1664911200744-8c3a496baa2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const HeroSection = () => {
  const duplicatedImages = [...images]

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image with 50% opacity */}
      <img
        src={backgroundImageUrl}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"
      />
      <div
        className="absolute top-0 left-0 w-full h-full object-cover bg-black backdrop-blur-4xl opacity-50 z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col gap-20 justify-between p-10 items-center h-full px-4">
        <img src={logo.src} alt="" className='h-16 object-contain'/>
        {/* Top Carousel */}
        <div className='flex flex-col items-center gap-20'>
        <div className="w-full flex">
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

        <h1 className={`${orbitron.className} text-5xl text-white font-bold text-center`}>
          BRINGING DRIVERS, TEAMS AND CHAMPIONSHIPS TOGETHER
        </h1>

        {/* Bottom Carousel */}
        <div className="w-full flex justify-center">
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
        <div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection
