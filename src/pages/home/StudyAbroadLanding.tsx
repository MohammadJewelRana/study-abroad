import React from "react";
import StudyNavbar from "./StudyNavbar";
import StudyHero from "./StudyHero";
import StudyStats from "./StudyStats";
import CountriesSection from "./CountriesSection";
 
import MalaysiaSection from "./MalaysiaSection";
import ProcessSection from "./ProcessSection";
import ContactCTA from "./ContactCTA";
import StudyFooter from "./StudyFooter";
import FloatingSocial from "./FloatingSocial";
 

const StudyAbroad = () => {
  return (
    <main className="min-h-screen bg-white">

      <StudyNavbar />

      <StudyHero />

      <StudyStats />

      <CountriesSection />

      {/* <WhyChooseUs /> */}

      <MalaysiaSection />

      <ProcessSection />

      <ContactCTA />

      <StudyFooter />
      <FloatingSocial/>

    </main>
  );
};

export default StudyAbroad;