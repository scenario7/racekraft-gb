import React from 'react'
import { Orbitron } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

  const inter = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
  })

const testimonials = [
    {
        name : "Jaden Pariat",
        photo : "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230817135803.jpg",
        color : "#000000",
        description : "To progress in motorsport, you need to learn from people who are better than you, so it’s important to be able to race against the very best. Moving across the world seemed a dream but working with Racekraft GB made it a reality and finishing on the podium at Silverstone in my second race in the UK was an amazing experience."
    },
    {
        name : "Veer Sheth",
        photo : "https://media.licdn.com/dms/image/v2/D4D03AQHHVl1EHmVb3g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725080748211?e=2147483647&v=beta&t=5c7rY-SNYP6NyY4GCMiFrjMfCRc1oU2D0BIVqyNWg7c",
        color : "#0090FF",
        description : "To progress in motorsport, you need to learn from people who are better than you, so it’s important to be able to race against the very best. Moving across the world seemed a dream but working with Racekraft GB made it a reality and finishing on the podium at Silverstone in my second race in the UK was an amazing experience."
    },
]

const Testimonials = () => {
  return (
    <div className="flex bg-white p-10 flex-col items-center">
      <h1
        className={`${orbitron.className} text-center text-black font-bold text-3xl`}
      >
        TESTIMONIALS
      </h1>
        <div
          className="bg-[#0090FF] w-36 h-1 my-4"
          style={{
            boxShadow: '0 0 24px 8px #0090FF88, 0 0 60px 16px #0090FF22',
          }}
        ></div>
        <div className='flex flex-col lg:flex-row justify-between gap-10 mt-10'>
          {testimonials.map((driver, index) => (
            <div className={`flex flex-col-reverse md:flex-row`} style={{ background: driver.color }} key={index}>
                <div className='flex flex-col p-10 gap-5'>
                    <p className={`${inter.className} tracking-tighter text-center`}>
                        {driver.description}
                    </p>
                <h1 className={`${inter.className} text-center font-semibold text-white`}>
                    {driver.name}
                </h1>
                </div>
                <img src={driver.photo} alt="" className='w-full md:w-40 object-cover'/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Testimonials