import {
  FaGraduationCap,
  FaUniversity,
  FaPassport,
  FaGlobeAsia,
 
} from "react-icons/fa";

import videoPlay       from "../../assets/greece1.mp4"

const countries = [
  {
    id: 2,
    country: "গ্রীস",
    flag: "https://flagcdn.com/w80/gr.png",
    program: "Honours & Masters Program",
    image:
      "https://www.eduopinions.com/wp-content/uploads/2026/04/Athens-University-of-Economics-and-Business-Best-Places-to-Study-Greece.jpg",

    bg: "bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700",
    hover:
      "hover:from-blue-800 hover:via-indigo-800 hover:to-violet-800",
    accent: "text-indigo-600",

    title: "🎓 অনার্স ও মাস্টার্স ভর্তি চলছে",
    description:
      "Honours এবং Masters প্রোগ্রামে সহজ ও দ্রুত ভর্তি।",

    graduation:
      "Bachelor (Honours) প্রোগ্রামের জন্য SSC ও HSC সম্পন্ন হতে হবে এবং Masters প্রোগ্রামের জন্য Bachelor's Degree সম্পন্ন হতে হবে.",
    ielts: "সর্বনিম্ন IELTS ৫.৫ স্কোর প্রয়োজন।",
    bank: "ব্যাংক সাপোর্ট প্রয়োজন।",
    visa: "১০০% ভিসা প্রসেসিং সাপোর্ট প্রদান করা হবে।",
  },

  {
    id: 1,
    country: "সাইপ্রাস",
    flag: "https://flagcdn.com/w80/cy.png",
    program: "Honours & Masters Program",
    image:
      "https://static.aeccglobal.com/cyprus_4a6c95f311.png",

    bg: "bg-gradient-to-r from-rose-600 via-red-600 to-orange-500",
    hover:
      "hover:from-rose-700 hover:via-red-700 hover:to-orange-600",
    accent: "text-rose-600",

    title: "🎓 অনার্স ও মাস্টার্স ভর্তি চলছে",
    description:
      "Honours এবং Masters প্রোগ্রামে সহজ ও দ্রুত ভর্তি।",

    graduation:
      "Bachelor (Honours) প্রোগ্রামের জন্য SSC ও HSC সম্পন্ন হতে হবে এবং Masters প্রোগ্রামের জন্য Bachelor's Degree সম্পন্ন হতে হবে.",
    ielts: "সর্বনিম্ন IELTS ৫.০ স্কোর প্রয়োজন।",
    bank: "ব্যাংক সাপোর্ট প্রয়োজন নেই।",
    visa: "১০০% ভিসা প্রসেসিং সাপোর্ট প্রদান করা হবে।",
  },

  {
    id: 3,
    country: "চেক রিপাবলিক",
    flag: "https://flagcdn.com/w80/cz.png",
    program: "Honours & Masters Program",
    image:
      "https://careergyan.co/images/blogs/study-in-czech/Czech-Republic-Student-Visa-Requirements.png",

    bg: "bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700",
    hover:
      "hover:from-emerald-800 hover:via-teal-800 hover:to-cyan-800",
    accent: "text-emerald-600",

    title: "🎓 অনার্স ও মাস্টার্স ভর্তি চলছে",
    description:
      "Honours এবং Masters প্রোগ্রামে সহজ ও দ্রুত ভর্তি।",

      bank: "ব্যাংক সাপোর্ট।",
    ielts: "IELTS প্রয়োজন নেই।",
    graduation:
      "Undergraduate অথবা Graduate শিক্ষার্থীরা আবেদন করতে পারবেন.",

    visa:
      "ডকুমেন্ট Legalization ও Attestation-এর সম্পূর্ণ সাপোর্ট প্রদান করা হবে।",
  },

  {
    id: 4,
    country: "আর্মেনিয়া",
    flag: "https://flagcdn.com/w80/am.png",
    program: "Honours & Masters Program",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d",

    bg: "bg-gradient-to-r from-red-700 via-rose-700 to-pink-600",
    hover:
      "hover:from-red-800 hover:via-rose-800 hover:to-pink-700",
    accent: "text-rose-600",

    title: "🎓 অনার্স ও মাস্টার্স ভর্তি চলছে",
    description:
      "Honours এবং Masters প্রোগ্রামে সহজ ও দ্রুত ভর্তি।",

    ielts: "IELTS প্রয়োজন নেই।",
    bank: "ব্যাংক সাপোর্ট।",
    graduation:
      "Undergraduate অথবা Graduate শিক্ষার্থীরা আবেদন করতে পারবেন.",

    visa:
      "ডকুমেন্ট Legalization ও Attestation-এর সম্পূর্ণ সাপোর্ট প্রদান করা হবে.",
  },
];

const StudyPrograms = () => {
  return (
    <div>
      <section>
        <div className="overflow-hidden rounded-3xl   bg-white shadow-xs">

          {/* ================= MAIN HEADER ================= */}

          <div className="relative overflow-hidden bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 px-6 py-7 text-white">

            {/* Decorative Blur */}

            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

            <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl"></div>

            <div className="relative flex flex-col items-center justify-center gap-4 text-center sm:flex-row">

              <FaGraduationCap className="text-5xl drop-shadow-lg" />

              <div>
                <h2 className="text-xl font-black md:text-4xl">
                   অনার্স ও মাস্টার্স ভর্তি চলছে
                </h2>

                <p className="mt-2 text-lg font-semibold text-white/90 md:text-lg">
                  Honours এবং Masters প্রোগ্রামে সহজ ও দ্রুত ভর্তি।
                </p>
              </div>

            </div>
          </div>

          {/* ================= COUNTRY CARDS ================= */}

          <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2   lg:grid-cols-2">
            {countries.map((item) => {
              const whatsappLink = `https://wa.me/8801977005583?text=${encodeURIComponent(
                `আসসালামু আলাইকুম, আমি ${item.country} এর ${item.program} সম্পর্কে বিস্তারিত জানতে চাই।`
              )}`;

              return (
                <div
                  key={item.id}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* ================= COUNTRY HEADER ================= */}
{/* 
                  <div
                    className={`${item.bg} px-5 py-6 text-white sm:px-8 sm:py-8`}
                  >
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                      <img
                        src={item.flag}
                        alt={item.country}
                        className="h-10 w-10 rounded-xl border-4 border-white object-cover shadow-xl md:h-20 md:w-20"
                      />

                      <div className="text-center sm:text-left">
                        <h2 className="text-5xl font-black tracking-wide md:text-5xl">
                          {item.country}
                        </h2>

                        <p className="mt-2 text-base font-semibold opacity-95 sm:text-lg md:text-2xl">
                          {item.program}
                        </p>
                      </div>

                    </div>
                  </div> */}

                  {/* ================= BODY ================= */}

                  <div className="flex flex-1 flex-col p-3">

                    {/* Program Info */}
 

                    {/* ================= COUNTRY IMAGE ================= */}

                    {/* <div className="my-1 overflow-hidden rounded-2xl">
                      <img
                        src={item.image}
                        alt={item.country}
                        className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                      />
                    </div> */}


<div className="my-1 overflow-hidden rounded-2xl">
  <video
    src={videoPlay}
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="h-72 w-full object-fill"
  />
</div>



                    {/* ================= REQUIREMENTS ================= */}

                    <div className="mt-6 flex-1">
                      <h3 className="mb-4 text-xl font-bold text-slate-800">
                        আবেদনের যোগ্যতা
                      </h3>

                      <div className="space-y-5">

                        {item.graduation && (
                          <div className="flex items-start gap-3">
                            <FaGraduationCap
                              className={`mt-1 h-5 w-5 shrink-0 ${item.accent}`}
                            />

                            <p className="leading-7 text-gray-700">
                              {item.graduation}
                            </p>
                          </div>
                        )}

                        {item.ielts && (
                          <div className="flex items-start gap-3">
                            <FaUniversity
                              className={`mt-1 h-5 w-5 shrink-0 ${item.accent}`}
                            />

                            <p className="leading-7 text-gray-700">
                              {item.ielts}
                            </p>
                          </div>
                        )}

                        {item.bank && (
                          <div className="flex items-start gap-3">
                            <FaPassport
                              className={`mt-1 h-5 w-5 shrink-0 ${item.accent}`}
                            />

                            <p className="leading-7 text-gray-700">
                              {item.bank}
                            </p>
                          </div>
                        )}

                        {item.visa && (
                          <div className="flex items-start gap-3">
                            <FaGlobeAsia
                              className={`mt-1 h-5 w-5 shrink-0 ${item.accent}`}
                            />

                            <p className="leading-7 text-gray-700">
                              {item.visa}
                            </p>
                          </div>
                        )}

                      </div>
                    </div>

                    {/* ================= WHATSAPP BUTTON ================= */}

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-8 block w-full rounded-xl py-4 text-center text-lg font-bold text-white transition duration-300 hover:scale-[1.03] ${item.bg} ${item.hover}`}
                    >
                      এখনই WhatsApp করুন
                    </a>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};

export default StudyPrograms;