import Header from "@/src/components/Header"
import Herosection from "@/src/sections/HomePage/HeroSection";
import Secondsection from "@/src/sections/HomePage/Secondsection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Herosection/>
      <Secondsection/>
      <Footer/>
    </>
  );
}
