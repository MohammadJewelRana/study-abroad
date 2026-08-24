import React, { useEffect, useState } from "react";
import {
  FaBars,
                      
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import image from '../../assets/logo.jpg'

const WHATSAPP_NUMBER = "8801977550083";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "আসসালামু আলাইকুম, আমি Study Abroad সম্পর্কে বিস্তারিত জানতে চাই।"
)}`;

const StudyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed left-0 right-0 top-0 z-[100]
        transition-all duration-300
        ${
          scrolled
            ? "bg-slate-950/95 py-2 shadow-xl backdrop-blur-xl"
            : "bg-transparent py-4"
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= NAVBAR ================= */}
        <div
          className={`
            flex items-center justify-between
            rounded-2xl
            border
            px-4 py-3
            transition-all duration-300
            ${
              scrolled
                ? "border-white/10 bg-white/[0.04]"
                : "border-white/10 bg-slate-950/40 backdrop-blur-md"
            }
          `}
        >

          {/* ================= LOGO ================= */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >

            {/* Replace this image with your actual logo */}
            <div className="flex h-10 w-auto items-center justify-center overflow-hidden rounded-xl bg-white">
              <img
                src={image}
                alt="Agency Logo"
                className="h-full w-full object-cover"
              />
            </div>
 

          </a>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden items-center gap-7 lg:flex">

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

          {/* ================= DESKTOP CTA ================= */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              items-center
              gap-2
              rounded-xl
              bg-yellow-400
              px-5
              py-3
              text-sm
              font-bold
              text-slate-950
              transition
              hover:-translate-y-0.5
              hover:bg-yellow-300
              lg:flex
            "
          >
            <FaWhatsapp size={18} />
            ফ্রি কনসালটেশন
          </a>

          {/* ================= MOBILE HAMBURGER ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/10
              text-white
              transition
              hover:bg-white/20
              lg:hidden
            "
          >
            {menuOpen ? (
              <FaTimes size={20} />
            ) : (
              <FaBars size={20} />
            )}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden
            ${
              menuOpen
                ? "mt-2 max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl">

            {/* Mobile Links */}
            <nav className="flex flex-col">

              <a
                href="#home"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-yellow-400"
              >
                হোম
              </a>

              <a
                href="#countries"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-yellow-400"
              >
                দেশসমূহ
              </a>

              <a
                href="#why-us"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-yellow-400"
              >
                কেন আমরা
              </a>

              <a
                href="#malaysia"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-yellow-400"
              >
                মালয়েশিয়া
              </a>

            </nav>

            {/* Mobile WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-yellow-400
                px-5
                py-3.5
                text-sm
                font-bold
                text-slate-950
                transition
                hover:bg-yellow-300
              "
            >
              <FaWhatsapp size={18} />
              ফ্রি কনসালটেশন
            </a>

          </div>

        </div>

      </div>
    </header>
  );
};

export default StudyNavbar;