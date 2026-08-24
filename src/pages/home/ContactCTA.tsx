import React from "react";
import {
  FaFacebookF,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGlobeAsia,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    number: "01977550083",
    whatsapp: "8801977550083",
  },
  {
    number: "01977550082",
    whatsapp: "8801977550082",
  },
  {
    number: "01977550081",
    whatsapp: "8801977550081",
  },
];

const otherCountries = [
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "France", flag: "🇫🇷" },
];

const FACEBOOK_URL = "https://www.facebook.com/people/Avelon-Consultancy/61580335493258/";

const ContactCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-5
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-yellow-400/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-400/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* =====================================================
            MAIN CTA
        ====================================================== */}

        <div className="text-center">

          {/* Icon */}
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-yellow-400/20
              bg-yellow-400/[0.08]
              text-yellow-400
            "
          >
            <FaGraduationCap size={25} />
          </div>

          {/* Small label */}
          <p
            className="
              mt-6
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-yellow-400
              sm:text-xs
            "
          >
            Start Your Journey
          </p>

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-4
              max-w-4xl
              text-3xl
              font-black
              leading-[1.1]
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            আপনার Study Abroad

            <span
              className="
                block
                bg-gradient-to-r
                from-yellow-300
                via-yellow-400
                to-amber-500
                bg-clip-text
                text-transparent
              "
            >
              Journey শুরু করুন
            </span>
          </h2>

          {/* Description */}
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
            আপনার academic profile, budget এবং future goal অনুযায়ী
            সঠিক country ও program নির্বাচন করতে আমাদের সাথে
            যোগাযোগ করুন।
          </p>

          {/* =================================================
              CONTACT NUMBERS
          ================================================== */}

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">

            {contacts.map((contact) => (
              <a
                key={contact.number}
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  "আসসালামু আলাইকুম, আমি Study Abroad সম্পর্কে বিস্তারিত জানতে চাই।"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-slate-200
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-400/30
                  hover:bg-emerald-400/10
                  hover:text-white
                "
              >
                <FaWhatsapp
                  className="
                    text-emerald-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                {contact.number}

                <FaArrowRight
                  size={10}
                  className="
                    text-slate-600
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-emerald-400
                  "
                />
              </a>
            ))}

          </div>

        </div>

        {/* =====================================================
            OTHER DESTINATIONS
        ====================================================== */}

        <div className="mt-20 text-center sm:mt-24">

          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-white/10 sm:w-16" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-yellow-400
                sm:text-xs
              "
            >
              More Destinations
            </span>

            <span className="h-px w-10 bg-white/10 sm:w-16" />

          </div>

          <h3
            className="
              mt-5
              text-2xl
              font-black
              text-white
              sm:text-3xl
            "
          >
            আরও অনেক দেশের জন্য{" "}
            <span className="text-yellow-400">
              যোগাযোগ করুন
            </span>
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
            আপনার পছন্দের destination এখানে তালিকাভুক্ত না থাকলেও
            আমাদের সাথে যোগাযোগ করুন।
          </p>

          {/* Countries */}
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">

            {otherCountries.map((country) => (
              <span
                key={country.name}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2.5
                  text-xs
                  font-medium
                  text-slate-400
                  transition
                  duration-300
                  hover:border-yellow-400/20
                  hover:bg-yellow-400/[0.05]
                  hover:text-white
                "
              >
                <span className="text-base">
                  {country.flag}
                </span>

                {country.name}
              </span>
            ))}

          </div>

        </div>

        {/* =====================================================
            CONTACT INFO
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            gap-7
            border-y
            border-white/10
            py-8
            sm:mt-20
            md:grid-cols-3
          "
        >

          {/* Phone */}
          <div className="flex items-center justify-center gap-3 md:justify-start">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/[0.08] text-yellow-400">
              <FaPhoneAlt size={14} />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-600">
                Call Us
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                01977550083
              </p>

            </div>

          </div>

          {/* Facebook */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 md:justify-center"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
              <FaFacebookF size={14} />
            </div>

            <div className="text-left">

              <p className="text-[10px] uppercase tracking-wider text-slate-600">
                Follow Us
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                Facebook Page
              </p>

            </div>

          </a>

          {/* Email */}
          <a
            href="mailto:info@avelonbd.com"
            className="group flex items-center justify-center gap-3 md:justify-end"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
              <FaEnvelope size={14} />
            </div>

            <div className="text-left">

              <p className="text-[10px] uppercase tracking-wider text-slate-600">
                Email Us
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                info@youragency.com
              </p>

            </div>

          </a>

        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:flex-row
            sm:gap-6
          "
        >

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <FaMapMarkerAlt className="text-yellow-400" />
            Bangladesh
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <FaGlobeAsia className="text-yellow-400" />
            Study Abroad Consultancy
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

          <p className="text-xs text-slate-600">
            আপনার ভবিষ্যৎ, আমাদের guidance
          </p>

        </div>

      </div>
    </section>
  );
};

export default ContactCTA; 