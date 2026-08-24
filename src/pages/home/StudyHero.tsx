
import {
  FaArrowRight,
  FaGraduationCap,
  FaGlobeEurope,
  FaUniversity,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/8801977005583?text=আসসালামু%20আলাইকুম,%20আমি%20Study%20Abroad%20সম্পর্কে%20বিস্তারিত%20জানতে%20চাই।";

const StudyHero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* ================= BACKGROUND ================= */}
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=90"
        alt="International students studying abroad"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Left-to-right gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-28 sm:px-6 lg:px-8">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="max-w-3xl">

            {/* Small badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3.5 py-2 text-xs font-semibold text-yellow-300 backdrop-blur-md sm:text-sm">
              <FaGlobeEurope className="text-yellow-400" />
              Study Abroad Consultancy
            </div>

            {/* Heading */}
            <h1 className="text-[2.7rem] font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">

              বিদেশে পড়াশোনার

              <span className="mt-1 pb-3 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                নতুন সুযোগ
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg">
       <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
  Greece, Cyprus, Czech Republic, Armenia, Malta, UK, USA এবং
  Netherlands-এ Bachelor (Honours), Masters ও উচ্চশিক্ষার
  বিভিন্ন প্রোগ্রামে পড়াশোনার সুযোগ সম্পর্কে জানুন।
</p>
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#countries"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-yellow-400
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-950
                  shadow-lg
                  shadow-yellow-500/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-yellow-300
                  sm:text-base
                "
              >
                দেশসমূহ দেখুন

                <FaArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                  sm:text-base
                "
              >
                <FaWhatsapp className="text-green-400" />

                ফ্রি পরামর্শ
              </a>

            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
                <FaCheckCircle className="text-green-400" />
                Profile Assessment
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
                <FaCheckCircle className="text-green-400" />
                Admission Guidance
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
                <FaCheckCircle className="text-green-400" />
                Visa Guidance
              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT PREMIUM CARD
          ================================================= */}
          <div className="relative hidden lg:block">

            {/* Glow */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-yellow-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-md">

              {/* Main image card */}
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-md">

                <div className="relative overflow-hidden rounded-[1.5rem]">
<img
  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=90"
  alt="International students"
  className="h-[430px] w-full object-cover"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                  {/* Image text */}
                  <div className="absolute bottom-6 left-6 right-6">

                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-yellow-400">
                      Your journey starts here
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      Study. Grow. Explore.
                    </h3>

                  </div>

                </div>

              </div>

              {/* ================= FLOATING CARD ================= */}
              <div
                className="
                  absolute
                  -bottom-7
                  -left-8
                  rounded-2xl
                  border
                  border-white/15
                  bg-slate-950/90
                  p-4
                  shadow-2xl
                  backdrop-blur-xl
                "
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                    <FaUniversity />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Programs
                    </p>

                    <p className="font-bold text-white">
                      Bachelor • Masters
                    </p>
                  </div>

                </div>

              </div>

              {/* ================= DESTINATION CARD ================= */}
              <div
                className="
                  absolute
                  -right-7
                  top-12
                  rounded-2xl
                  border
                  border-white/15
                  bg-slate-950/90
                  px-4
                  py-3
                  shadow-2xl
                  backdrop-blur-xl
                "
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
                    <FaGlobeEurope />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Destinations
                    </p>

                    <p className="text-sm font-bold text-white">
                      Greece • Cyprus
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= MOBILE BOTTOM INFO ================= */}
      <div className="absolute bottom-5 left-0 right-0 px-5 lg:hidden">

        <div className="mx-auto flex max-w-md items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-md">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 text-slate-950">
              <FaGraduationCap size={16} />
            </div>

            <div>
              <p className="text-[10px] text-slate-400">
                Study Programs
              </p>

              <p className="text-xs font-bold text-white">
                Bachelor & Masters
              </p>
            </div>

          </div>

          <a
            href="#countries"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-yellow-400 hover:text-slate-950"
          >
            <FaArrowRight size={13} />
          </a>

        </div>

      </div>

    </section>
  );
};

export default StudyHero;