"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SimpleFooter() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Logo */}
        <div className=" flex ">
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

          {/* Links */}
          <div className="flex gap-6 justisy-center mx-auto text-sm">
            <Link href="/" className="hover:text-[#1999D5]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#1999D5]">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#1999D5]">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-[#1999D5]">
              Privacy
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex  gap-4 mr-18 relative top-12">
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
                  rel="opener referrer"
                  className={`text-white transition-all duration-200
                  ${social.color}
                  hover:scale-120 hover:-translate-y-2
                  hover:rotate-4
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

        {/* Copyright */}
        <div className="mt-20 text-center text-gray-500 text-xs">
          © 2024 Job For ITI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
