import Features from "@/components/Poster_Design/Features";
import { Footer } from "@/components/Poster_Design/Footer";
import Hero from "@/components/Poster_Design/Hero";
import { HowItWorks } from "@/components/Poster_Design/HowItWorks";
import { InteractiveDemo } from "@/components/Poster_Design/InteractiveDemo";
import { QRCodeSection } from "@/components/Poster_Design/QRCodeSection";

const Page = () => {
  return (
    <div className=" ">
      <Hero />
      <Features />
      <InteractiveDemo />
      <HowItWorks />
      <QRCodeSection />
      <Footer />
    </div>
  );
};
export default Page;

