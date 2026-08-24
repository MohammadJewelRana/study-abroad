import React from "react";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  center = false,
}) => {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>

      <span className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">
        {eyebrow}
      </span>

      <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-500">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionHeading;