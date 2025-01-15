import CommonHeader from "@/components/common/CommonHeader";
import CommonFooter from "@/components/common/CommonFooter"
import HeroSection from "@/components/mainPage/HeroSection";
import PresentationSection from "@/components/mainPage/PresentationSection";

export default function Home() {
  return (
    <div>
      <CommonHeader/>
      <main>
        <HeroSection/>
        <PresentationSection/>
      </main>
      <div id="footer">
        <CommonFooter/>
      </div>
    </div>
  );
}
