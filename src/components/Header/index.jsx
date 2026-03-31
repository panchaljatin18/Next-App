"use client";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-20
      
      ${
        scrolled
          ? "bg-black backdrop-blur-lg shadow-[0_20px_50px_rgba(25,153,213,0.3)]  border-white"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      {/* Animated background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-2.5 opacity-30 blur-3xl bg-linear-to-r from-[#1999D5] via-[#3E9D62] to-[#1999D5] animate-pulse"></div>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="mx-auto h-full flex items-center px-6 relative z-10">
        {/* Title with heavy effects - FIXED */}
        <div className="mx-4 lg:mx-20 group">
          <a
            href="/"
            className="relative inline-flex items-center justify-center text-2xl md:text-3xl font-extrabold text-white transition-all duration-300 group"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient-x 3s ease infinite",
            }}
          >
            Creativity
            <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-linear-to-r from-[#087eb4] to-[#3E9D62] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(8,126,180,0.7)]" />
          </a>
        </div>

        {/* Menu with line hover effects */}
        <div className="hidden md:flex gap-6 ml-auto items-center font-medium pr-4">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/About-us" },
            { label: "Contact Us", href: "/contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg overflow-hidden transition-all duration-300 bg-transparent group"
            >
              <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                {item.label}
              </span>
              {/* Bottom line hover effect - expands from center */}
              <span className="absolute left-1/2 bottom-2 w-0 h-0.5 bg-linear-to-r from-[#1999D5] to-[#3E9D62] group-hover:w-full transition-all duration-300 -translate-x-1/2 shadow-[0_0_10px_rgba(25,153,213,0.7)]" />
            </a>
          ))}

          {/* Social Icons with heavy effects */}
          <div className="flex items-center gap-4 ml-4 relative">
            {/* Glow background */}
            <div className="absolute inset-0 bg-linear-to-r from-[#1999D5]/20 to-[#3E9D62]/20 blur-xl rounded-full"></div>

            {[
              { icon: FaInstagram, color: "hover:text-pink-500", href: "/" },
              { icon: FaFacebookF, color: "hover:text-blue-500", href: "/" },
              { icon: FaLinkedinIn, color: "hover:text-sky-700", href: "/" },
              { icon: FaYoutube, color: "hover:text-red-500", href: "/" },
              { icon: FaXTwitter, color: "hover:text-gray-900", href: "/" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white transition-all duration-300
                  ${social.color}
                  hover:scale-150 hover:-translate-y-2
                  hover:rotate-12
                  hover:drop-shadow-[0_0_15px_currentColor]
                  relative group
                  before:absolute before:-inset-2
                  before:bg-current before:rounded-full before:opacity-0
                  before:blur-xl before:transition-opacity before:duration-300
                  hover:before:opacity-30`}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 8s infinite;
        }
      `}</style>
    </header>
  );
}
