import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
interface LogoProps {
  size?: "sm" | "lg" | "xs";
}
const Logo: React.FC<LogoProps> = ({ size = "sm" }) => {
  const w = size === "sm" ? 240 : size === "lg" ? 400 : 120;
  const h = size === "sm" ? 80 : size === "lg" ? 120 : 60;

  return (
    <Link href="/">
      <Image src={logo} alt="logo" width={w} height={h} priority/>
    </Link>
  );
};

export default Logo;
