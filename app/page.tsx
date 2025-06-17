import HeroSection from '@/components/HeroSection'
import OurStory from '@/components/OurStory'
import Partnerships from "@/components/Partnerships";
import IndianRacingLeague from "@/components/IndianRacingLeague";
import CustomFooter from "@/components/CustomFooter";
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <OurStory/>
      <Partnerships/>
      <IndianRacingLeague/>
      <Testimonials/>
      <CustomFooter/>
    </div>
  );
}
