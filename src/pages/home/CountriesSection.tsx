import React from "react";
import SectionHeading from "./SectionHeading";
import CountryCard from "./CountryCard";
 const studyCountries = [
   {
     id: "greece",
     country: "গ্রীস",
     countryEn: "Greece",
     flag: "https://flagcdn.com/w160/gr.png",
 
     image:
       "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1400&q=85",
 
     programs: ["Bachelor (Honours)", "Masters"],
 
     graduation:
       "Bachelor (Honours) প্রোগ্রামের জন্য SSC ও HSC সম্পন্ন হতে হবে এবং Masters প্রোগ্রামের জন্য Bachelor's Degree সম্পন্ন হতে হবে।",
 
     ielts: "সর্বনিম্ন IELTS ৫.৫ স্কোর প্রয়োজন।",
 
     highlights: [
       "Bachelor ও Masters প্রোগ্রাম",
       "বিভিন্ন academic subject",
       "আন্তর্জাতিক শিক্ষার পরিবেশ",
       "ইউরোপে পড়াশোনার সুযোগ",
     ],
   },
 
   {
     id: "cyprus",
     country: "সাইপ্রাস",
     countryEn: "Cyprus",
     flag: "https://flagcdn.com/w160/cy.png",
 
     image:
       "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
 
     programs: ["Bachelor (Honours)", "Masters"],
 
     graduation:
       "Bachelor (Honours) প্রোগ্রামের জন্য SSC ও HSC সম্পন্ন হতে হবে এবং Masters প্রোগ্রামের জন্য Bachelor's Degree সম্পন্ন হতে হবে।",
 
     ielts: "সর্বনিম্ন IELTS ৫.০ স্কোর প্রয়োজন।",
 
     highlights: [
       "Bachelor ও Masters প্রোগ্রাম",
       "আন্তর্জাতিক শিক্ষার্থীদের সুযোগ",
       "বিভিন্ন academic subject",
       "ইউরোপীয় শিক্ষার পরিবেশ",
     ],
   },
 
   {
     id: "czech",
     country: "চেক রিপাবলিক",
     countryEn: "Czech Republic",
     flag: "https://flagcdn.com/w160/cz.png",
 
     image:
       "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1400&q=85",
 
     programs: ["Bachelor (Honours)", "Masters"],
 
     graduation:
       "Bachelor (Honours) প্রোগ্রামের জন্য SSC ও HSC সম্পন্ন হতে হবে এবং Masters প্রোগ্রামের জন্য Bachelor's Degree সম্পন্ন হতে হবে।",
 
     ielts: "সর্বনিম্ন IELTS ৫.৫ স্কোর প্রয়োজন।",
 
     highlights: [
       "Bachelor ও Masters প্রোগ্রাম",
       "বিভিন্ন university options",
       "বিভিন্ন academic field",
       "ইউরোপে উচ্চশিক্ষার সুযোগ",
     ],
   },
 
   {
     id: "armenia",
     country: "আর্মেনিয়া",
     countryEn: "Armenia",
     flag: "https://flagcdn.com/w160/am.png",
 
     image:
       "https://images.unsplash.com/photo-1605106702734-205df224ecce?auto=format&fit=crop&w=1400&q=85",
 
     programs: ["Bachelor (Honours)", "Masters"],
 
     graduation:
       "Bachelor (Honours) প্রোগ্রামের জন্য SSC ও HSC সম্পন্ন হতে হবে এবং Masters প্রোগ্রামের জন্য Bachelor's Degree সম্পন্ন হতে হবে।",
 
     ielts: "সর্বনিম্ন IELTS ৫.৫ স্কোর প্রয়োজন।",
 
     highlights: [
       "Bachelor ও Masters প্রোগ্রাম",
       "বিভিন্ন academic field",
       "আন্তর্জাতিক শিক্ষার্থীদের সুযোগ",
       "আকর্ষণীয় study destination",
     ],
   },
 ];

const CountriesSection = () => {
  return (
    <section
      id="countries"
      className="px-5 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="Study Destinations"
          title={
            <>
              আপনার পছন্দের{" "}
              <span className="text-red-600">
                Study Destination
              </span>
            </>
          }
          description="Greece, Cyprus, Czech Republic এবং Armenia-তে Bachelor (Honours) ও Masters প্রোগ্রামের সুযোগ সম্পর্কে জানুন।"
        />

        <div className="mt-12 grid gap-7 md:grid-cols-2">

          {studyCountries.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default CountriesSection;