import React from "react";
import CommonHeader from "@/components/common/CommonHeader";
import HeroSection from "@/components/mainPage/HeroSection";
import PresentationSection from "@/components/mainPage/PresentationSection";
import ExtendedFooter from "@/components/mainPage/ExtendedFooter";
import ProjectsSection from "@/components/mainPage/ProjectsSection";

export default function Home() {
  return (
    <>
      <CommonHeader />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <div
          id="presentation">
          <PresentationSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
      </main>
      <div id="footer">
        <ExtendedFooter />
      </div>
    </>
  );
}
