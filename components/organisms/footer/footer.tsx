"use client";

import { useState } from "react";
import { Button } from "../../atoms/button/button";
import { FooterProps } from "./Footer.types";
import Link from "next/link";
import { IconWrapper } from "@/components/atoms/icon-wrapper/IconWrapper";

export const Footer = ({ className = "" }: FooterProps) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribe email:", email);
      setEmail("");
    }
  };

  const footerLinks = {
    company: {
      title: "Company",
      links: [
        { label: "About us", link: "#" },
        { label: "Team", link: "#" },
        { label: "Careers", link: "#" },
        { label: "Blog", link: "#" },
      ],
    },
    contact: {
      title: "Contact",
      links: [
        { label: "Help & Support", link: "#" },
        { label: "Partner with us", link: "#" },
        { label: "Ride with us", link: "#" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", link: "#" },
        { label: "Refund & Cancellation", link: "#" },
        { label: "Privacy Policy", link: "#" },
        { label: "Cookie Policy", link: "#" },
      ],
    },
  };

  const socialMediaLinks = [
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      link: "https://instagram.com",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className={`food-footer bg-[#212121] px-[201px] text-white ${className}`}
    >
      <div className="food-footer-container max-w-[1440px] mx-auto px-6">
        {/* Upper Section */}
        <div className="food-footer-upper py-[63px] flex flex-col lg:flex-row justify-between gap-12 mb-8">
          {/* Left - Footer Links */}
          <div className="food-footer-links flex flex-col md:flex-row gap-8 md:gap-16">
            {Object.values(footerLinks).map((category, idx) => (
              <div className="food-footer-category" key={category.title ?? idx}>
                <h3 className="food-footer-category-title text-white font-bold text-[22px] leading-[120%] mb-10">
                  {category.title}
                </h3>
                <ul className="food-footer-links-list space-y-4">
                  {category.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.link}
                        className="food-footer-link text-[##F5F5F5] text-[18px] font-normal leading-[100%] hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right - Social & Newsletter */}
          <div className="food-footer-social-newsletter flex flex-col gap-[43px]">
            <h3 className="food-footer-social-title text-white font-bold text-[18px] leading-[120%] uppercase">
              FOLLOW US
            </h3>
            <div className="food-footer-social-icons flex gap-4">
              {socialMediaLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="food-social-icon text-[#F5F5F5] hover:text-primary transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <h3 className="food-footer-newsletter-title text-white font-bold text-[18px] leading-[120%]">
              Receive exclusive offers in your mailbox
            </h3>
            <div className="food-newsletter-form flex gap-4">
              {/* Email Input */}
              <div className="food-email-input-wrapper relative flex items-center w-[334px] h-[60px] bg-[#424242] rounded-lg px-4 py-2 gap-2.5">
                <IconWrapper
                  iconName="envelope"
                  size={25}
                  className="text-[#ADADAD]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your email"
                  className="food-email-input flex-1 bg-transparent text-white placeholder:text-[#9E9E9E] outline-none text-base leading-[140%]"
                />
              </div>

              <Button
                onClick={handleSubscribe}
                className="food-subscribe-btn text-white text-[17px] font-bold leading-[100%] w-[133px] h-[60px] rounded-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #FFB800 0%, #FF8A00 100%)",
                  boxShadow:
                    "0px 14px 32px 0px rgba(255, 178, 14, 0.29), 0px 5px 8px 0px rgba(222, 151, 0, 0.24)",
                }}
                data-test-id="food-subscribe-btn"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Lower Section - Copyright */}
        <div className="food-footer-lower flex justify-between border-t-2 border-[#424242] pt-4 pb-[19px]">
          <p className="food-footer-copyright text-center text-[#F5F5F5] text-[15px] font-400">
            All rights Reserved{" "}
            <span className="font-bold">
              © Your Company, {new Date().getFullYear() - 4}
            </span>
          </p>
          <p className="food-footer-copyright text-center text-[#F5F5F5] text-[15px] font-400">
            Made with 💛 by <span className="font-bold">Themewagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
