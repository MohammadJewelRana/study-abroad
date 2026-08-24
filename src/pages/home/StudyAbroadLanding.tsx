import React from "react";
import StudyNavbar from "./StudyNavbar";
import StudyHero from "./StudyHero";
import StudyStats from "./StudyStats";
import CountriesSection from "./CountriesSection";
import WhyChooseUs from "./WhyChooseUs";
import MalaysiaSection from "./MalaysiaSection";
import ProcessSection from "./ProcessSection";
import ContactCTA from "./ContactCTA";
import StudyFooter from "./StudyFooter";
 

const StudyAbroad = () => {
  return (
    <main className="min-h-screen bg-white">

      <StudyNavbar />

      <StudyHero />

      <StudyStats />

      <CountriesSection />

      <WhyChooseUs />

      <MalaysiaSection />

      <ProcessSection />

      <ContactCTA />

      <StudyFooter />

    </main>
  );
};

export default StudyAbroad;