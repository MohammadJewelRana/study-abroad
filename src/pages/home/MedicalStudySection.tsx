import React from "react";

const medicalCountries = [
  {
    id: "russia",
    name: "রাশিয়া",
    nameEn: "Russia",
    flag: "https://flagcdn.com/w160/ru.png",
  },
  {
    id: "kazakhstan",
    name: "কাজাখস্তান",
    nameEn: "Kazakhstan",
    flag: "https://flagcdn.com/w160/kz.png",
  },
  {
    id: "armenia",
    name: "আর্মেনিয়া",
    nameEn: "Armenia",
    flag: "https://flagcdn.com/w160/am.png",
  },
  {
    id: "kyrgyzstan",
    name: "কিরগিজস্তান",
    nameEn: "Kyrgyzstan",
    flag: "https://flagcdn.com/w160/kg.png",
  },
  {
    id: "bulgaria",
    name: "বুলগেরিয়া",
    nameEn: "Bulgaria",
    flag: "https://flagcdn.com/w160/bg.png",
  },
  {
    id: "uzbekistan",
    name: "উজবেকিস্তান",
    nameEn: "Uzbekistan",
    flag: "https://flagcdn.com/w160/uz.png",
  },
  {
    id: "georgia",
    name: "জর্জিয়া",
    nameEn: "Georgia",
    flag: "https://flagcdn.com/w160/ge.png",
  },
];

const MedicalStudySection: React.FC = () => {
  return (
    <section
      id="medical-study"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-80
          w-80
          rounded-full
          bg-red-100/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-80
          w-80
          rounded-full
          bg-blue-100/40
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-red-500 sm:w-12" />

            <span
              className="
                rounded-full
                border
                border-red-100
                bg-red-50
                px-4
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-red-600
                sm:text-xs
              "
            >
              Medical Study Abroad
            </span>

            <span className="h-px w-8 bg-red-500 sm:w-12" />

          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-slate-950
              sm:text-4xl
              md:text-5xl
            "
          >
            Medical Study-এর জন্য

            <span className="block text-red-600">
              আমাদের গন্তব্যসমূহ
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              sm:leading-8
            "
          >
            বিভিন্ন আন্তর্জাতিক destination-এ Medical Study-এর
            জন্য শিক্ষার্থীদের নিয়ে আমরা কাজ করি।
          </p>

        </div>

        {/* ================= COUNTRIES ================= */}

        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-5xl
            grid-cols-2
            gap-3
            sm:mt-14
            sm:grid-cols-3
            sm:gap-5
            lg:grid-cols-4
          "
        >

          {medicalCountries.map((country) => (
            <div
              key={country.id}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-red-200
                hover:shadow-xl
                sm:rounded-3xl
                sm:p-6
              "
            >

              {/* Top Accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-red-500
                  to-blue-500
                  opacity-0
                  transition
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Flag */}

              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-28
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-100
                  bg-slate-50
                  shadow-sm
                  transition
                  duration-300
                  group-hover:scale-105
                  group-hover:shadow-md
                  sm:h-24
                  sm:w-36
                  sm:rounded-2xl
                "
              >
                <img
                  src={country.flag}
                  alt={`${country.nameEn} flag`}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* Country Name */}

              <h3
                className="
                  mt-4
                  text-base
                  font-black
                  text-slate-900
                  sm:mt-5
                  sm:text-lg
                  md:text-xl
                "
              >
                {country.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MedicalStudySection;