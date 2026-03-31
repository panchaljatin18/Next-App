import Header from "@/src/components/Header"
import Herosection from "@/src/sections/HomePage/HeroSection";
import SecondSection from "@/src/sections/HomePage/SecondSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Herosection/>
      <SecondSection/>
      <Footer/>
    </>
  );
}
