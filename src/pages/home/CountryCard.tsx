import React from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";

const CountryCard = ({ country }) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">

        <img
          src={country.image}
          alt={country.country}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />

        {/* Flag */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-3 py-2 backdrop-blur-md">

          <img
            src={country.flag}
            alt={`${country.country} flag`}
            className="h-5 w-8 rounded object-cover"
          />

          <span className="text-xs font-bold text-white">
            {country.country}
          </span>

        </div>

        {/* Country */}
        <div className="absolute bottom-5 left-5">

          <p className="text-xs font-medium uppercase tracking-widest text-yellow-400">
            Study in
          </p>

          <h3 className="mt-1 text-3xl font-black text-white">
            {country.countryEn}
          </h3>

        </div>

      </div>

      {/* Body */}
      <div className="p-6">

        {/* Programs */}
        <div className="flex flex-wrap gap-2">

          {country.programs.map((program) => (
            <span
              key={program}
              className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600"
            >
              {program}
            </span>
          ))}

        </div>

        {/* Requirements */}
        <div className="mt-6 space-y-4">

          <div className="flex gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
              <FaGraduationCap size={14} />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                শিক্ষাগত যোগ্যতা
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {country.graduation}
              </p>
            </div>

          </div>

          <div className="flex gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700">
              <FaBookOpen size={14} />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                IELTS Requirement
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {country.ielts}
              </p>
            </div>

          </div>

        </div>

        {/* Highlights */}
        <div className="mt-6 grid grid-cols-2 gap-2 border-t border-slate-100 pt-5">

          {country.highlights.map((item) => (
            <div
              key={item}
              className="flex gap-2 text-xs text-slate-600"
            >
              <FaCheckCircle className="mt-0.5 shrink-0 text-green-500" />
              <span>{item}</span>
            </div>
          ))}

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-sm font-bold text-white transition hover:bg-red-600"
        >
          বিস্তারিত জানুন
          <FaArrowRight size={13} />
        </a>

      </div>

    </article>
  );
};

export default CountryCard;