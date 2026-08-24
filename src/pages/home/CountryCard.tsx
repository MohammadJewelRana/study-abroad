/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  FaBookOpen,
  FaGraduationCap,
  FaUniversity,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/8801977005583?text=আসসালামু%20আলাইকুম,%20আমি%20বিদেশে%20পড়াশোনা%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।";

const CountryCard = ({ country }: any) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-[300px] overflow-hidden">

        <img
          src={country.image}
          alt={country.country}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/30
            to-transparent
          "
        />

        {/* =================================================
            FLAG
        ================================================== */}

        <div
          className="
            absolute
            left-5
            top-5
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
          "
        >
          <img
            src={country.flag}
            alt={`${country.country} flag`}
            className="h-8 w-12 rounded object-cover"
          />

          <span className="text-lg font-bold text-white">
            {country.country}
          </span>
        </div>

        {/* =================================================
            VISA SUCCESS BADGE
        ================================================== */}

        {country.visaSuccess && (
          <div
            className="
              absolute
              right-5
              top-5
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-emerald-300/30
              bg-red-500/90
              px-3
              py-2
              shadow-lg
              shadow-emerald-950/20
              backdrop-blur-md
            "
          >
            <FaCheckCircle
              size={12}
              className="text-white"
            />

            <span className="text-[10px] font-black uppercase tracking-wide text-white sm:text-xs">
              {country.visaSuccess}
            </span>
          </div>
        )}

        {/* =================================================
            COUNTRY NAME
        ================================================== */}

        <div className="absolute bottom-6 left-6">

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
            {country.countryEn}
          </h3>

        </div>
      </div>

      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="p-6 sm:p-7">

        {/* Programs */}
        <div className="flex flex-wrap gap-2">

          {country.programs.map((program: any) => (
            <span
              key={program}
              className="
                rounded-full
                bg-slate-100
                px-3.5
                py-1.5
                text-xs
                font-bold
                text-slate-700
              "
            >
              {program}
            </span>
          ))}

        </div>

        {/* Requirements */}
        <div className="mt-7 space-y-5">

          {/* Education */}
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
                bg-slate-100
                text-slate-700
              "
            >
              <FaGraduationCap size={15} />
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
                bg-yellow-100
                text-yellow-700
              "
            >
              <FaBookOpen size={15} />
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
                bg-emerald-100
                text-emerald-700
              "
            >
              <FaUniversity size={15} />
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900">
                ব্যাংক সাপোর্ট
              </h4>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                শিক্ষার্থীদের প্রয়োজনীয় ব্যাংকিং ও
                ফাইন্যান্সিয়াল ডকুমেন্টেশন সম্পর্কে
                গাইডলাইন প্রদান করা হয়।
              </p>
            </div>

          </div>

        </div>

        {/* =================================================
            WHATSAPP CTA
        ================================================== */}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-7
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-emerald-500
            px-5
            py-3.5
            text-sm
            font-bold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-emerald-600
            hover:shadow-lg
            hover:shadow-emerald-500/20
          "
        >
          <FaWhatsapp size={20} />

          যোগাযোগ করুন
        </a>

      </div>
    </article>
  );
};

export default CountryCard;