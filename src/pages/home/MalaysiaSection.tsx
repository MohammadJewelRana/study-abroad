import React from "react";
import {
  FaArrowRight,
  FaGraduationCap,
  FaCheckCircle,
} from "react-icons/fa";
 const malaysiaData = {
   country: "মালয়েশিয়া",
   countryEn: "Malaysia",
   flag: "https://flagcdn.com/w160/my.png",
 
   image:
     "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=85",
 
   programs: ["Masters", "PhD"],
 
   highlights: [
     "Masters প্রোগ্রাম",
     "PhD প্রোগ্রাম",
     "বিভিন্ন academic subject",
     "আন্তর্জাতিক শিক্ষার পরিবেশ",
   ],
 };

const MalaysiaSection = () => {
  return (
    <section
      id="malaysia"
      className="px-5 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950">

          {/* Image */}
          <img
            src={malaysiaData.image}
            alt="Study in Malaysia"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30" />

          <div className="relative grid min-h-[500px] items-center p-8 sm:p-12 lg:grid-cols-2 lg:p-16">

            <div>

              {/* Flag */}
              <div className="flex items-center gap-3">

                <img
                  src={malaysiaData.flag}
                  alt="Malaysia flag"
                  className="h-6 w-10 rounded object-cover"
                />

                <span className="text-sm font-bold text-yellow-400">
                  Special Study Destination
                </span>

              </div>

              <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">

                Malaysia

                <span className="block text-yellow-400">
                  Masters & PhD
                </span>

              </h2>

              <p className="mt-6 max-w-xl leading-7 text-slate-300">
                মালয়েশিয়ায় Masters ও PhD প্রোগ্রামে
                উচ্চশিক্ষার সুযোগ সম্পর্কে আমাদের সাথে
                যোগাযোগ করুন।
              </p>

              {/* Programs */}
              <div className="mt-7 flex gap-3">

                {malaysiaData.programs.map((program) => (
                  <span
                    key={program}
                    className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300"
                  >
                    {program}
                  </span>
                ))}

              </div>

              {/* Highlights */}
              <div className="mt-7 grid gap-2 sm:grid-cols-2">

                {malaysiaData.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <FaCheckCircle className="text-yellow-400" />
                    {item}
                  </div>
                ))}

              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Malaysia সম্পর্কে জানুন
                <FaArrowRight />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MalaysiaSection;