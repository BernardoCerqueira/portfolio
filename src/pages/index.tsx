import React from "react";
import MainHeader from "@/components/mainPage/MainHeader";
import HeroSection from "@/components/mainPage/HeroSection";
import PresentationSection from "@/components/mainPage/PresentationSection";
import ExtendedFooter from "@/components/mainPage/ExtendedFooter";
import ProjectsSection from "@/components/mainPage/ProjectsSection";
import Head from "next/head";
import CurriculumSection from "@/components/curriculumPage/CurriculumSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bernardo Cerqueira | Portfólio</title>
        <link rel="shortcut icon" href="/iconBlack.svg" type="image/x-icon" />
      </Head>
      <MainHeader />
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
