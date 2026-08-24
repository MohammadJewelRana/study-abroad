

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <div className="mx-auto w-full max-w-4xl px-2 text-center">

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-7 bg-red-500 sm:w-10" />

        <span
          className="
            rounded-full
            border
            border-red-100
            bg-red-50
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-red-600
            sm:px-4
            sm:text-xs
          "
        >
          {eyebrow}
        </span>

        <span className="h-px w-7 bg-red-500 sm:w-10" />
      </div>

      {/* Heading */}
      <h2
        className="
          mx-auto
          mt-5
          max-w-3xl
          text-3xl
          font-black
          leading-[1.15]
          tracking-tight
          text-slate-950
          sm:mt-6
          sm:text-4xl
          md:text-5xl
          lg:text-[3.4rem]
        "
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            font-medium
            leading-7
            text-slate-500
            sm:mt-6
            sm:text-base
            sm:leading-8
          "
        >
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionHeading;