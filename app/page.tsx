import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/FeatureSection";
import Testimonials from "./components/Testimonials";
import HeroSection2 from "./components/HeroSection2";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import NotesInAction from "./components/NotesInAction";
import TameYourWork from "./components/TameYourWork";

export default function Home() {
  return (
    <>
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <NotesInAction />
      <TameYourWork />
      <Footer />
    </div>
    </>
  );
}
