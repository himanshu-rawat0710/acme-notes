import { FC } from "react";
import FooterLink from "./unitComponents/FooterLink";
import FooterSection from "./unitComponents/FooterSection";
import Link from "next/link";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { label: "Why Acme Note", url: "#" },
      { label: "Note Taking", url: "#" },
      { label: "Self Organization", url: "#" },
      { label: "Productivity", url: "#" },
      { label: "Teams", url: "#" },
      { label: "Students", url: "#" },
      { label: "Compare Plans", url: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "AI Features", url: "#" },
      { label: "Collaborations", url: "#" },
      { label: "Web Clipper", url: "#" },
      { label: "Advanced Search", url: "#" },
      { label: "Document Scanning", url: "#" },
      { label: "Personalization", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Acme Note News", url: "#" },
      { label: "Help and Learning", url: "#" },
      { label: "Templates", url: "#" },
      { label: "Forum", url: "#" },
      { label: "Find an Expert", url: "#" },
      { label: "Developers", url: "#" },
      { label: "Contact Us", url: "#" },
      { label: "Careers", url: "#" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Sign Up for Free", url: "#" },
      { label: "Login", url: "#" },
      { label: "Download", url: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", url: "#" },
  { label: "Twitter", url: "#" },
  { label: "LinkedIn", url: "#" },
];

const legalLinks = [
  { label: "Cookie Preferences", url: "#" },
  { label: "Security", url: "#" },
  { label: "Legal", url: "#" },
  { label: "Privacy", url: "#" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-background-200 text-primary-600 py-8">
      <div className="container mx-auto px-4">
        {/* Logo and Main Sections */}
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo */}
          <div className="flex items-center">
            {/* <img src="/logo.png" alt="Logo" className="h-10 mr-6" /> */}
            <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-primary-600">Acme Note</a>
            </div>
          </div>
          {/* Social Links */}
          <div className="space-x-4 mt-4 md:mt-0 hidden md:flex">
            {socialLinks.map((link, index) => (
              <FooterLink key={index} label={link.label} url={link.url} />
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {footerSections.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0 md:hidden">
            {socialLinks.map((link, index) => (
              <FooterLink key={index} label={link.label} url={link.url} />
            ))}
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-6">
          {/* Left Section */}
          <div>
            <p>&copy; 2024 Acme Note. All rights reserved.</p>
          </div>
          {/* Right Section */}
          <div className="flex space-x-4">
            {legalLinks.map((link, index) => (
            //   <FooterLink key={index} label={link.label} url={link.url} />
            <>
                <Link key={index} href={link.url} className="hover:text-primary-400 text-xs">
                    {link.label}
                </Link>
            </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
