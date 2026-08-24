import React from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaGraduationCap,
  FaUniversity,
  FaWhatsapp,
} from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/8801977005583?text=আসসালামু%20আলাইকুম,%20আমি%20Malaysia-তে%20Masters%20ও%20PhD%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।";

const MalaysiaSection: React.FC = () => {
  const studyFields = [
    "Business",
    "Management",
    "Computer Science",
    "IT",
    "Data Science",
    "AI",
    "Engineering",
    "Finance",
  ];

  return (
    <section
      id="malaysia"
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:px-8
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-emerald-500/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-yellow-400/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.03]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-yellow-400 sm:w-12" />

            <span
              className="
                rounded-full
                border
                border-yellow-400/20
                bg-yellow-400/10
                px-4
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-yellow-400
                sm:text-xs
              "
            >
              Special Study Destination
            </span>

            <span className="h-px w-8 bg-yellow-400 sm:w-12" />

          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Malaysia-তে

            <span className="block text-yellow-400">
              Masters & PhD
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
              sm:leading-8
            "
          >
            উচ্চশিক্ষার জন্য Malaysia-তে Masters ও PhD
            প্রোগ্রামের বিভিন্ন সুযোগ সম্পর্কে জানুন এবং
            আপনার জন্য উপযুক্ত program নির্বাচন করুন।
          </p>

        </div>

        {/* =====================================================
            MAIN FEATURE CARD
        ====================================================== */}

        <div
          className="
            relative
            mt-12
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.04]
            shadow-2xl
            backdrop-blur-sm
            sm:mt-14
            lg:rounded-[2.5rem]
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* =================================================
                IMAGE
            ================================================== */}

            <div
              className="
                relative
                min-h-[430px]
                overflow-hidden
                sm:min-h-[500px]
                lg:min-h-[650px]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=90"
                alt="Study in Malaysia"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950
                  via-slate-950/30
                  to-transparent
                  lg:bg-gradient-to-r
                  lg:from-transparent
                  lg:to-slate-950
                "
              />

              {/* =================================================
                  MALAYSIA FLAG
              ================================================== */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-slate-950/70
                  px-3
                  py-2
                  shadow-lg
                  backdrop-blur-md
                  sm:left-7
                  sm:top-7
                  sm:gap-3
                  sm:px-4
                  sm:py-2.5
                "
              >

                <img
                  src="https://flagcdn.com/w160/my.png"
                  alt="Malaysia flag"
                  className="
                    h-5
                    w-8
                    rounded
                    object-cover
                    sm:h-6
                    sm:w-10
                  "
                />

                <span className="text-xs font-bold text-white sm:text-sm">
                  মালয়েশিয়া
                </span>

              </div>

              {/* =================================================
                  COST ON IMAGE
              ================================================== */}

              <div
                className="
                  absolute
                  left-4
                  top-24
                  z-10
                  sm:left-7
                  sm:top-28
                "
              >

                <div
                  className="
                    rounded-2xl
                    border
                    border-red-500/30
                    bg-slate-950/75
                    px-4
                    py-3
                    shadow-2xl
                    backdrop-blur-md
                    sm:px-6
                    sm:py-4
                  "
                >

                  <p
                    className="
                      text-2xl
                      font-black
                      leading-tight
                      tracking-tight
                      text-red-500
                      sm:text-3xl
                      md:text-4xl
                    "
                  >
                    মাত্র ২ লক্ষ ৫০ হাজার টাকা
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      font-semibold
                      tracking-wide
                      text-white/70
                      sm:text-xs
                    "
                  >
                    (Tuition Fees + EMGS)
                  </p>

                </div>

              </div>

              {/* =================================================
                  IMAGE BOTTOM TEXT
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-6
                  left-4
                  sm:bottom-8
                  sm:left-7
                "
              >

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-yellow-400
                  "
                >
                  Study in
                </p>

                <h3
                  className="
                    mt-1
                    text-4xl
                    font-black
                    tracking-tight
                    text-white
                    sm:text-5xl
                  "
                >
                  Malaysia
                </h3>

              </div>

            </div>

            {/* =================================================
                CONTENT
            ================================================== */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-6
                sm:p-8
                lg:p-12
              "
            >

              {/* Program badges */}

              <div className="flex flex-wrap gap-2">

                <span
                  className="
                    rounded-full
                    bg-yellow-400
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-slate-950
                  "
                >
                  Masters
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  PhD
                </span>

              </div>

              {/* Main Title */}

              <h3
                className="
                  mt-6
                  text-3xl
                  font-black
                  leading-tight
                  text-white
                  sm:text-4xl
                "
              >
                উচ্চশিক্ষার জন্য

                <span className="block text-yellow-400">
                  Malaysia
                </span>
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                  sm:leading-8
                "
              >
                আপনার academic background এবং career goal অনুযায়ী
                Masters অথবা PhD program নির্বাচন করতে আমাদের
                experienced team-এর কাছ থেকে guidance নিন।
              </p>

              {/* =================================================
                  REQUIREMENTS
              ================================================== */}

              <div className="mt-8 space-y-5">

                {/* Educational Qualification */}

                <div className="flex gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/10
                      text-yellow-400
                    "
                  >
                    <FaGraduationCap size={15} />
                  </div>

                  <div>

                    <h4 className="text-sm font-bold text-white">
                      শিক্ষাগত যোগ্যতা
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Masters প্রোগ্রামের জন্য Bachelor's Degree
                      এবং PhD প্রোগ্রামের জন্য সংশ্লিষ্ট Master's
                      Degree প্রয়োজন।
                    </p>

                  </div>

                </div>

                {/* IELTS */}

                <div className="flex gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-yellow-400/10
                      text-yellow-400
                    "
                  >
                    <FaBookOpen size={15} />
                  </div>

                  <div>

                    <h4 className="text-sm font-bold text-white">
                      IELTS Requirement
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Program ও university অনুযায়ী IELTS
                      requirement প্রযোজ্য হতে পারে।
                    </p>

                  </div>

                </div>

                {/* Bank Support */}

                <div className="flex gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-emerald-400/10
                      text-emerald-400
                    "
                  >
                    <FaUniversity size={15} />
                  </div>

                  <div>

                    <h4 className="text-sm font-bold text-white">
                      ব্যাংক সাপোর্ট
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      প্রয়োজনীয় ব্যাংকিং ও financial
                      documentation সম্পর্কে guidance প্রদান করা হয়।
                    </p>

                  </div>

                </div>

              </div>

              {/* =================================================
                  SUBJECTS
              ================================================== */}

              <div className="mt-8 border-t border-white/10 pt-7">

                <h4 className="text-sm font-bold text-white">
                  সম্ভাব্য Study Fields
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">

                  {studyFields.map((field) => (
                    <span
                      key={field}
                      className="
                        rounded-lg
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-2
                        text-[11px]
                        font-medium
                        text-slate-300
                        transition
                        hover:border-yellow-400/30
                        hover:text-yellow-400
                      "
                    >
                      {field}
                    </span>
                  ))}

                </div>

              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-8
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-green-500
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-green-500/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-600
                  hover:shadow-green-500/20
                  sm:text-base
                "
              >

                <FaWhatsapp size={20} />

                Malaysia সম্পর্কে যোগাযোগ করুন

                <FaArrowRight
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM TRUST POINTS
        ====================================================== */}

        <div className="mt-7 grid gap-3 sm:grid-cols-3">

          {[
            "Masters & PhD Programs",
            "University Guidance",
            "Admission & Visa Support",
          ].map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-3
                text-xs
                font-medium
                text-slate-400
              "
            >

              <FaCheckCircle className="text-yellow-400" />

              {item}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MalaysiaSection;