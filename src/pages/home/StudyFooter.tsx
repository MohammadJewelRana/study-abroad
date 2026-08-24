

import image from '../../assets/logo.jpg'

const StudyFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-7">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">

        {/* Logo & Agency */}
        <div className="flex items-center gap-3">

          {/* Logo Image */}
          <div
            className="
              flex
              h-16
              w-auto
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
           
            "
          >
            <img
              src={image}
              alt="Your Agency Logo"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Agency Name */}
         

        </div>

        {/* Copyright */}
        <p className="text-center text-[10px] text-slate-600 sm:text-xs">
          © {new Date().getFullYear()} Avelon Edu & Travels. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default StudyFooter;