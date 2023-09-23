"use client";

import Link from "next/link";
import React from "react";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

export const ActiveLink = ({ label, path, icon }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${style.link} ${path === pathName && style["active-link"]}`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};
