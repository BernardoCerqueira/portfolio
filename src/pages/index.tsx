import CommonHeader from "@/components/common/CommonHeader";
import CommonFooter from "@/components/common/CommonFooter"
import HeroSection from "@/components/mainPage/HeroSection";
import PresentationSection from "@/components/mainPage/PresentationSection";

export default function Home() {
  return (
    <>
      <CommonHeader/>
      <main>
        <div id="hero">
          <HeroSection/>
        </div>
        <div id="presentation">
          <PresentationSection/>
        </div>
        <div id="projects">

        </div>
        <div id="contact">

        </div>
      </main>
      <div id="footer">
        <CommonFooter/>
      </div>
    </>
  );
}
