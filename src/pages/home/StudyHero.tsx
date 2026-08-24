import React from "react";
import {
  FaArrowRight,
  FaGraduationCap,
  FaGlobeEurope,
} from "react-icons/fa";

const StudyHero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=90"
        alt="International Students"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-32 lg:px-8">

        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300 backdrop-blur-md">
            <FaGlobeEurope />
            Study Abroad
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">

            বিদেশে পড়াশোনার
            <span className="block text-yellow-400">
              নতুন সুযোগ
            </span>

          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Greece, Cyprus, Czech Republic এবং Armenia-তে
            Bachelor (Honours) ও Masters প্রোগ্রামে পড়াশোনার
            সুযোগ সম্পর্কে জানুন।
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#countries"
              className="group flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              দেশসমূহ দেখুন
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <FaGraduationCap />
              পরামর্শ নিন
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StudyHero;