import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const StudyFooter = () => {
  return (
    <footer className="bg-slate-950 px-5 py-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
            <FaGraduationCap />
          </div>

          <div>
            <p className="font-black text-white">
              YOUR AGENCY
            </p>

            <p className="text-xs text-slate-500">
              Study Abroad Consultancy
            </p>
          </div>

        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Your Agency. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default StudyFooter;