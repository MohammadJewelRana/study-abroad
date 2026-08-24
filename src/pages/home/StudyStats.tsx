import React from "react";
import {
  FaGlobeEurope,
  FaGraduationCap,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";

const stats = [
  {
    icon: FaGlobeEurope,
    value: "৪+",
    label: "Study Destinations",
  },
  {
    icon: FaGraduationCap,
    value: "Bachelor",
    label: "Honours Programs",
  },
  {
    icon: FaUserGraduate,
    value: "Masters",
    label: "Degree Programs",
  },
  {
    icon: FaUniversity,
    value: "PhD",
    label: "Higher Education",
  },
];

const StudyStats = () => {
  return (
    <section className="relative z-20 -mt-8 px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:grid-cols-4">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 border-b border-slate-100 p-5 md:border-b-0 md:border-r last:border-r-0"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <Icon />
              </div>

              <div>
                <p className="font-black text-slate-900">
                  {item.value}
                </p>

                <p className="text-xs text-slate-500">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default StudyStats;