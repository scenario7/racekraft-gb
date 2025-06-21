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

const drivers = [
  {
    name : "Divy Nandan",
    photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCa9BYhWTDqWC8D3PRN-gV19MEzU2oTiPlVQ&s"
  },
  {
    name : "Jaden Pariat",
    photo : "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230817135803.jpg"
  },
  {
    name : "Veer Sheth",
    photo : "https://media.licdn.com/dms/image/v2/D4D03AQHHVl1EHmVb3g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725080748211?e=2147483647&v=beta&t=5c7rY-SNYP6NyY4GCMiFrjMfCRc1oU2D0BIVqyNWg7c"
  },
]

const OurStory = () => {

  return (
    <div className="flex flex-col-reverse md:flex-row bg-white items-center justify-center">
      <div className="bg-white md:w-1/2 h-full px-5 flex items-center gap-10 md:gap-20 justify-center">
        {drivers.map((driver, index) => (
          <div className='flex flex-col items-center gap-5 py-10 md:py-0' key={index}>
            <img src={driver.photo} alt="" className='w-20 h-20 md:w-30 md:h-30 rounded-full object-cover'/>
            <h2 className={`${inter.className} font-medium text-center text-black md:text-lg tracking-tighter`}>{driver.name}</h2>
          </div>
        ))}
      </div>
      <div className="bg-black md:w-1/2 flex flex-col items-center justify-center p-10">
        <h1 className={`${orbitron.className} text-center font-bold text-3xl`}>OUR STORY</h1>
        <div
          className="bg-[#0090FF] w-36 h-1 my-4"
          style={{
            boxShadow: '0 0 24px 8px #0090FF88, 0 0 60px 16px #0090FF22',
          }}
        ></div>
        <div className={`${inter.className} text-white tracking-tighter mt-4 space-y-4 text-center`}>
          <p>
            Racekraft GB is the ‘Official Grid Partner’ for the FIA certified Indian F4 and Formula Regional Indian Championships, and the Indian Racing League (IRL). It promoted the IRL at the 2022 Goodwood Festival of Speed and has helped three young Indian drivers: Divy Nandan, Jaden Pariat, and Veer Sheth, find racing opportunities in single seaters in the United Kingdom.
          </p>
          <p>
            Racekraft GB is led by Karthik, who has an MSc in Motorsport Engineering and Management from Cranfield University. Karthik’s experience includes time at the Buddh International Circuit, Motorsport Vision as a Data Engineer for the BRDC F4 and GB3 Championships, and with SRO in the British GT Championship, amongst others. Racekraft GB is quickly becoming a key link between Indian and global motorsports.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurStory