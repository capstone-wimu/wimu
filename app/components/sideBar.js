"use client";
import React from "react";
import Image from "next/image";
import Button from "./button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const buttons = [
  {
    title: "Beranda",
    icon: "home",
    href: "/home",
  },
  {
    title: "Bookmarks",
    icon: "bookmark",
    href: "/bookmarks",
  },
  {
    title: "Profile",
    icon: "person",
    href: "/profile",
  },
  {
    title: "Settings",
    icon: "settings",
    href: "/settings",
  },
  {
    title: "Logout",
    icon: "logout",
    href: "/logout",
  },
];

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="container h-screen border-r border-gray-200 mx-auto w-[280px] max-xl:w-fit pt-3 pb-5 flex flex-col items-center justify-between overflow-y-auto overflow-x-hidden">
      <div className="container flex flex-col max-xl:items-center items-start">
        <Link href="/home" className="button btn-link">
          <Image
            className="logo rounded-full max-xl:w-[40px]"
            src="/logo.svg"
            alt="WIM-U Logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        {buttons.map((button) => (
          <Button
            active={pathname === button.href}
            {...button}
            key={button.title}
          />
        ))}
      </div>
      <div className="container p-3 max-xl:p-0 w-full flex max-xl:justify-center">
        <Link
          href={"/profile"}
          className="button btn-link flex items-center justify-between gap-3 overflow-hidden"
        >
          <Image
            src="/user.png"
            alt="My Profile"
            className="rounded-full"
            width={40}
            height={40}
          />
          <div className="container flex justify-between items-center gap-3 max-xl:hidden">
            <span className="container flex flex-col items-start">
              <p className="text-sm font-bold">Samuel Beryl</p>
              <p className="text-sm font-light text-gray-400">@2010631170119</p>
            </span>
            <i
              className="material-icons"
              style={{ fontSize: "18px", fontWeight: "100" }}
            >
              more_horiz
            </i>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
