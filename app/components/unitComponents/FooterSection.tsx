import { FC } from "react";
import FooterLink from "./FooterLink";

interface FooterSectionProps {
  title: string;
  links: { label: string; url: string }[];
}

const FooterSection: FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      <ul className="text-sm">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <FooterLink label={link.label} url={link.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
