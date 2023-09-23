import {
  DeviceMobileIcon,
  HomeIcon,
  InfoIcon,
  LogIcon,
} from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "..";

const navItems = [
  {
    path: "/about",
    label: "About",
    icon: <InfoIcon className="mr-2" />,
  },
  {
    path: "/contact",
    label: "Contact",
    icon: <DeviceMobileIcon className="mr-2" />,
  },
  {
    path: "/pricing",
    label: "Pricing",
    icon: <LogIcon className="mr-2" />,
  },
];

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex flex-row items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
