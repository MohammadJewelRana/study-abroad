
import {
  FaUniversity,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

const MalaysiaCosting: React.FC = () => {
  return (
    <section className="space-y-4">

      {/* ================= COSTING ================= */}

      <div className="grid gap-4 sm:grid-cols-2">

        {/* Tuition Fees */}
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-emerald-200
            bg-gradient-to-br
            from-emerald-50
            via-white
            to-teal-50
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          {/* Decorative */}
          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-28
              w-28
              rounded-full
              bg-emerald-400/10
              blur-2xl
            "
          />

          <div className="relative">

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-600
                  text-white
                  shadow-md
                "
              >
                <FaUniversity size={18} />
              </div>

              <div>

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                  "
                >
                  Tuition Fees
                </p>

                <h3 className="mt-1 text-xl font-black text-emerald-700 sm:text-2xl">
                  ৫,০০০ – ৮,০০০ RM
                </h3>

              </div>

            </div>

            <div className="mt-5 flex items-start gap-2">

              <FaCheckCircle
                className="mt-1 shrink-0 text-emerald-500"
                size={13}
              />

              <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                বিশ্ববিদ্যালয় ও নির্বাচিত প্রোগ্রাম অনুযায়ী
                Tuition Fees পরিবর্তিত হতে পারে।
              </p>

            </div>

          </div>
        </div>


        {/* Estimated Cost */}
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-yellow-200
            bg-gradient-to-br
            from-yellow-50
            via-white
            to-amber-50
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          {/* Decorative */}
          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-28
              w-28
              rounded-full
              bg-yellow-400/10
              blur-2xl
            "
          />

          <div className="relative">

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-yellow-500
                  text-lg
                  font-black
                  text-white
                  shadow-md
                "
              >
                <FaMoneyBillWave size={18} />
              </div>

              <div>

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                  "
                >
                  আনুমানিক খরচ
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                  ২,৫০,০০০ টাকা
                </h3>

              </div>

            </div>

            <div className="mt-5 flex items-start gap-2">

              <FaCheckCircle
                className="mt-1 shrink-0 text-yellow-500"
                size={13}
              />

              <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                প্রাথমিক প্রসেসিং ও সংশ্লিষ্ট খরচের আনুমানিক
                হিসাব। প্রকৃত খরচ প্রোগ্রাম ও পরিস্থিতি অনুযায়ী
                পরিবর্তিত হতে পারে।
              </p>

            </div>

          </div>
        </div>

      </div>


      {/* ================= EMCGH ================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-200
          bg-gradient-to-r
          from-cyan-50
          via-white
          to-emerald-50
          px-6
          py-6
          text-center
          sm:px-8
        "
      >

        {/* Decorative */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-20
            w-40
            -translate-x-1/2
            rounded-full
            bg-cyan-300/10
            blur-3xl
          "
        />

        <div className="relative">

          <p
            className="
              text-[10px]
              font-black
              uppercase
              tracking-[0.25em]
              text-cyan-600
              sm:text-xs
            "
          >
            EMCGH
          </p>

          <h3 className="mt-2 text-xl font-black text-slate-800 sm:text-2xl">
            EMCGH সম্পর্কিত তথ্য
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-slate-600 sm:text-sm">
            প্রোগ্রাম ও সংশ্লিষ্ট খরচ সম্পর্কে বিস্তারিত তথ্য জানতে
            আমাদের counsellor-এর সাথে যোগাযোগ করুন।
          </p>

        </div>

      </div>

    </section>
  );
};

export default MalaysiaCosting;