import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

const StudyNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-50
        hidden px-6 pt-4 lg:block
        transition-all duration-500 ease-out
        ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="mx-auto max-w-7xl">

        <div
          className="
            flex items-center justify-between
            rounded-2xl
            border border-slate-200/10
            bg-slate-950/90
            px-5 py-3
            shadow-2xl
            backdrop-blur-xl
          "
        >

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
              <FaGraduationCap size={20} />
            </div>

            <div>
              <h1 className="font-black text-white">
                YOUR AGENCY
              </h1>

              <p className="text-[9px] uppercase tracking-[0.3em] text-yellow-400">
                Study Abroad
              </p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8">

            <a
              href="#home"
              className="text-sm font-semibold text-white transition hover:text-yellow-400"
            >
              হোম
            </a>

            <a
              href="#countries"
              className="text-sm font-semibold text-white transition hover:text-yellow-400"
            >
              দেশসমূহ
            </a>

            <a
              href="#why-us"
              className="text-sm font-semibold text-white transition hover:text-yellow-400"
            >
              কেন আমরা
            </a>

            <a
              href="#malaysia"
              className="text-sm font-semibold text-white transition hover:text-yellow-400"
            >
              মালয়েশিয়া
            </a>

          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="
              rounded-xl
              bg-yellow-400
              px-5 py-3
              text-sm
              font-bold
              text-slate-950
              transition
              hover:bg-yellow-300
              hover:-translate-y-0.5
            "
          >
            ফ্রি কনসালটেশন
          </a>

        </div>

      </div>
    </header>
  );
};

export default StudyNavbar;