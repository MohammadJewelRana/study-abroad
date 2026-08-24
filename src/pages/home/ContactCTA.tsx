import React from "react";
import {
  FaGraduationCap,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-red-600 px-5 py-24"
    >

      {/* Decorative */}
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-black/10" />

      <div className="relative mx-auto max-w-4xl text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-slate-950">
          <FaGraduationCap size={30} />
        </div>

        <h2 className="mt-7 text-4xl font-black text-white sm:text-5xl md:text-6xl">
          আপনার Study Abroad
          <span className="block text-yellow-300">
            Journey শুরু করুন
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-red-100">
          আপনার academic profile অনুযায়ী কোন দেশ ও program
          আপনার জন্য উপযুক্ত তা জানতে আমাদের সাথে যোগাযোগ করুন।
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <a
            href="tel:+8801XXXXXXXXX"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-red-600 transition hover:-translate-y-1"
          >
            <FaPhoneAlt />
            কল করুন
          </a>

          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-green-600"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;