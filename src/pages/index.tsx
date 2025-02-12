import React from "react";
import MainHeader from "@/components/mainPage/MainHeader";
import HeroSection from "@/components/mainPage/HeroSection";
import PresentationSection from "@/components/mainPage/PresentationSection";
import ExtendedFooter from "@/components/mainPage/ExtendedFooter";
import ProjectsSection from "@/components/mainPage/ProjectsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bernardo Cerqueira | Portfólio",
  description: "Confira o portfólio do Bernardo Cerqueira Marques e saiba mais sobre seus principais projetos e sobre suas principais habilidades.",
  openGraph: {
    title: "Bernardo Cerqueira | Portfólio",
    description: "Confira o portfólio do Bernardo Cerqueira Marques e saiba mais sobre seus principais projetos e sobre suas principais habilidades.",
    url: "https://becerqueira.com",
    images: [
      {
        url: "https://becerqueira.com/bernardo.jpg",
        alt: "Bê Cerqueira"
      }
    ]
  },
  icons: {
    icon: "/iconBlack.svg"
  }
}

export default function Home() {
  return (
    <>
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
