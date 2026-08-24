
import {
  FaGlobeEurope,
  FaGraduationCap,
  FaUniversity,
  FaUserGraduate,
  FaArrowUp,
} from "react-icons/fa";

const stats = [
  {
    icon: FaGlobeEurope,
    value: "৪+",
    label: "Study Destinations",
    description: "দেশ",
  },
  {
    icon: FaGraduationCap,
    value: "Bachelor",
    label: "Honours Programs",
    description: "প্রোগ্রাম",
  },
  {
    icon: FaUserGraduate,
    value: "Masters",
    label: "Degree Programs",
    description: "উচ্চশিক্ষা",
  },
  {
    icon: FaUniversity,
    value: "PhD",
    label: "Higher Education",
    description: "প্রোগ্রাম",
  },
];

const StudyStats = () => {
  return (
    <section className="relative z-20 -mt-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* Main Container */}
        <div
          className="
            grid
            grid-cols-2
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-[0_20px_60px_rgba(15,23,42,0.10)]
            md:grid-cols-4
          "
        >

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`
                  group
                  relative
                  p-5
                  transition-all
                  duration-300
                  hover:bg-slate-50
                  sm:p-6
                  lg:p-7

                  ${
                    index === 0
                      ? "border-b border-r border-slate-100"
                      : ""
                  }

                  ${
                    index === 1
                      ? "border-b border-slate-100 md:border-r"
                      : ""
                  }

                  ${
                    index === 2
                      ? "border-r border-slate-100"
                      : ""
                  }

                  md:border-b-0
                  md:border-r
                  md:last:border-r-0
                `}
              >

                {/* Top Accent */}
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[2px]
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-red-600
                    to-yellow-400
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                <div className="flex items-center gap-3 sm:gap-4">

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-red-50
                      to-orange-50
                      text-red-600
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:bg-red-600
                      group-hover:text-white
                      sm:h-12
                      sm:w-12
                    "
                  >
                    <Icon className="text-lg sm:text-xl" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">

                    {/* Value */}
                    <div className="flex items-center gap-1.5">

                      <p
                        className="
                          truncate
                          text-base
                          font-black
                          tracking-tight
                          text-slate-950
                          sm:text-lg
                          lg:text-xl
                        "
                      >
                        {item.value}
                      </p>

                      <FaArrowUp
                        className="
                          hidden
                          text-[9px]
                          text-green-500
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          sm:block
                        "
                      />

                    </div>

                    {/* Label */}
                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[10px]
                        font-medium
                        text-slate-500
                        sm:text-xs
                      "
                    >
                      {item.label}
                    </p>

                  </div>

                </div>

                {/* Small description */}
       

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default StudyStats;   