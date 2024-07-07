import Link from "next/link";
import { FC } from "react";

interface FooterLinkProps {
  label: string;
  url: string;
}

const FooterLink: FC<FooterLinkProps> = ({ label, url }) => {
  return (
    <Link href={url} className="hover:text-primary-400">
      {label}
    </Link>
  );
};

export default FooterLink;
