import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";
import Gallery from "@/components/Gallery/Gallery";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import { getFeaturedRoom } from "@/libs/apis";


const Home = async() => {

  const featuredRoom = await getFeaturedRoom();
  return(
  <>
  <HeroSection />
  {/*Page Search*/}
  <PageSearch/>
  {/*Featured Room*/}
  <FeaturedRoom featuredRoom={featuredRoom} />
  {/*Gallery*/}
  <Gallery/>
  {/*Newsletter*/}
  <NewsLetter />
  </>
  )
    
  
  
}

export default Home;
