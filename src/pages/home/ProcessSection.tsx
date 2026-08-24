
import {
  FaComments,
  FaUniversity,
  FaPassport,
  FaPlane,
  FaArrowRight,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

interface ProcessStep {
  number: string;
  icon: React.ElementType;
  title: string;
  text: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    icon: FaComments,
    title: "Free Consultation",
    text: "আপনার academic profile, পছন্দের দেশ এবং study plan নিয়ে আমাদের expert team-এর সাথে আলোচনা।",
  },
  {
    number: "02",
    icon: FaUniversity,
    title: "Program Selection",
    text: "আপনার academic background ও future goal অনুযায়ী উপযুক্ত program এবং university নির্বাচন।",
  },
  {
    number: "03",
    icon: FaPassport,
    title: "Application & Visa",
    text: "Admission application, প্রয়োজনীয় documentation এবং visa preparation-এর জন্য structured guidance।",
  },
  {
    number: "04",
    icon: FaPlane,
    title: "Ready to Fly",
    text: "Pre-departure guidance সম্পন্ন করে আপনার international education journey শুরু করুন।",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-5 py-24 sm:py-28">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-red-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              শুরু থেকে
              <span className="text-red-600">
                {" "}Ready to Fly
              </span>
            </>
          }
          description="আপনার Study Abroad journey-কে সহজ, পরিষ্কার এবং organized রাখতে প্রতিটি ধাপে আমরা আপনাকে guide করি।"
        />

        {/* =====================================================
            DESKTOP PROCESS
        ====================================================== */}

        <div className="relative mt-16 hidden md:block">

          {/* Connecting Line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[43px] h-px bg-gradient-to-r from-red-200 via-red-400 to-yellow-300" />

          <div className="grid grid-cols-4 gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >

                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-full border-8 border-slate-50 bg-white shadow-lg transition-all duration-500 group-hover:scale-110">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white transition-all duration-500 group-hover:bg-red-600">
                      <Icon size={20} />
                    </div>

                  </div>

                  {/* Number */}
                  <div className="mt-5">

                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600">
                      Step {step.number}
                    </span>

                    <h3 className="mt-2 text-lg font-black text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-[240px] text-sm leading-6 text-slate-500">
                      {step.text}
                    </p>

                  </div>

                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="absolute right-[-18px] top-[30px] z-20 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm">
                      <FaArrowRight size={10} />
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            MOBILE TIMELINE
        ====================================================== */}

        <div className="relative mt-12 md:hidden">

          {/* Vertical line */}
          <div className="absolute bottom-8 left-[23px] top-8 w-px bg-gradient-to-b from-red-400 via-red-200 to-yellow-300" />

          <div className="space-y-7">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative flex gap-5"
                >

                  {/* Timeline Icon */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 bg-slate-950 text-white shadow-md transition group-hover:bg-red-600">

                    <Icon size={15} />

                  </div>

                  {/* Card */}
                  <div
                    className="
                      flex-1
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-5
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:shadow-lg
                    "
                  >

                    <div className="flex items-center justify-between gap-3">

                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                        Step {step.number}
                      </span>

                      <span className="text-2xl font-black text-slate-100">
                        {step.number}
                      </span>

                    </div>

                    <h3 className="mt-2 text-base font-black text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {step.text}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-16
            max-w-3xl
            rounded-2xl
            border
            border-red-100
            bg-white
            px-5
            py-5
            text-center
            shadow-sm
            sm:px-8
          "
        >

          <p className="text-sm leading-6 text-slate-600">
            আপনার profile অনুযায়ী সঠিক destination ও program
            নির্বাচন করতে{" "}
            <span className="font-bold text-red-600">
              আমাদের সাথে যোগাযোগ করুন।
            </span>
          </p>

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;