
import {
  FaCheckCircle,
  FaPassport,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: FaUserGraduate,
    title: "Profile Assessment",
    text: "আপনার academic background ও future plan অনুযায়ী পরামর্শ।",
  },
  {
    icon: FaUniversity,
    title: "University Guidance",
    text: "উপযুক্ত university ও program selection-এ সহায়তা।",
  },
  {
    icon: FaPassport,
    title: "Application Support",
    text: "Admission application ও documentation process-এ guidance।",
  },
  {
    icon: FaCheckCircle,
    title: "Visa Guidance",
    text: "Visa documentation ও preparation-এর জন্য structured support।",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="bg-slate-950 px-5 py-24 text-white sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        {/* Left */}
        <div>

          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                আপনার Study Abroad
                <span className="block text-yellow-400">
                  Journey-তে আমরা পাশে
                </span>
              </>
            }
            description="সঠিক information, proper documentation এবং structured guidance-এর মাধ্যমে আপনার admission journey সহজ করাই আমাদের লক্ষ্য।"
          />

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-yellow-300"
          >
            কথা বলুন
          </a>

        </div>

        {/* Features */}
        <div className="grid gap-4 sm:grid-cols-2">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-yellow-400/30 hover:bg-white/[0.07]"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-slate-950">
                  <Icon />
                </div>

                <h3 className="mt-5 font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;