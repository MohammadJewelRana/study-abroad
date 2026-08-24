import React from "react";
import {
  FaComments,
  FaUniversity,
  FaPassport,
  FaPlane,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    icon: FaComments,
    title: "Free Consultation",
    text: "আপনার academic profile ও study plan নিয়ে আলোচনা।",
  },
  {
    number: "02",
    icon: FaUniversity,
    title: "Program Selection",
    text: "আপনার profile অনুযায়ী suitable program নির্বাচন।",
  },
  {
    number: "03",
    icon: FaPassport,
    title: "Application & Visa",
    text: "Admission ও visa documentation process।",
  },
  {
    number: "04",
    icon: FaPlane,
    title: "Ready to Fly",
    text: "Pre-departure guidance নিয়ে journey শুরু।",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-slate-50 px-5 py-24">

      <div className="mx-auto max-w-7xl">

        <SectionHeading
          center
          eyebrow="Our Process"
          title={
            <>
              সহজ ও পরিষ্কার
              <span className="text-red-600">
                {" "}Application Process
              </span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <span className="text-4xl font-black text-slate-100">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <Icon />
                  </div>

                </div>

                <h3 className="mt-6 font-black text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default ProcessSection;