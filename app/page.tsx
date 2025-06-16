import HeroSection from '@/components/HeroSection'
import OurStory from '@/components/OurStory'
import Partnerships from "@/components/Partnerships";
import IndianRacingLeague from "@/components/IndianRacingLeague";
import CustomFooter from "@/components/CustomFooter";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <OurStory/>
      <Partnerships/>
      <IndianRacingLeague/>
      <CustomFooter/>
    </div>
  );
}
