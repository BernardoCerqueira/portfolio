import React from "react";
import MainHeader from "@/components/mainPage/MainHeader";
import HeroSection from "@/components/mainPage/HeroSection";
import PresentationSection from "@/components/mainPage/PresentationSection";
import ExtendedFooter from "@/components/mainPage/ExtendedFooter";
import ProjectsSection from "@/components/mainPage/ProjectsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bernardo Cerqueira | Currículo</title>
        <meta name="description" content="Confira o currículo do Bernardo Cerqueira Marques e saiba mais sobre a sua carreira e suas habilidades." />

        <meta property="og:title" content="Bernardo Cerqueira | Currículo" />
        <meta property="og:description" content="Confira o currículo do Bernardo Cerqueira Marques e saiba mais sobre a sua carreira e suas habilidades." />
        <meta property="og:url" content="https://becerqueira.com/curriculum" />
        <meta property="og:image" content="https://becerqueira.com/programmer-art.svg" />
        <meta property="og:image:alt" content="Bê Cerqueira" />
        <meta property="og:type" content="website" />

        <meta name="google-site-verification" content="lS2OeaZM45pA23oBc541VTRXEpLoATd7FChsVTgrSPU" />
        
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
