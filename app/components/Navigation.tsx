"use client";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import Link from "next/link";
import logo from "@/public/assets/shared/desktop/logo.svg";
import Image from "next/image";
import { nanoid } from "nanoid";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

const Navigation = ({ user }: Session) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["home", "headphones", "speakers", "earphones"];

  const linksEl = links.map((route) => {
    return (
      <li key={nanoid()}>
        <Link
          href={`/${route}`}
          className="text-white font-semibold uppercase  hover:text-terra cursor-pointer tracking-[2px] "
        >
          {route}
        </Link>
      </li>
    );
  });

  return (
    <nav className="bg-almostblack ">
      <div className="py-8 px-6 md:px-10 xl:px-0 max-w-6xl lg:pb-9 flex items-center justify-between gap-6 mx-auto">
        <AiOutlineMenu
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        />

        {/*Mobile Menu*/}
        {isOpen && (
          <div
            className="w-screen h-screen bg-black bg-opacity-30 fixed inset-0"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="fixed top-0 left-0 bottom-0 right-1/2 bg-almostblack flex">
              <AiOutlineClose
                className="text-2xl text-white fixed inset-6"
                onClick={() => setIsOpen((prev) => !prev)}
              />
              <ul className="m-auto flex flex-col text-center gap-5">
                {linksEl}
              </ul>
            </div>
          </div>
        )}

        {/**Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={143}
            height={25}
            className="mr-auto md:mr-0"
          />
        </Link>

        {/*Navigation links */}
        <ul className="hidden md:flex gap-10 text-xs ">{linksEl}</ul>

        <AiOutlineShoppingCart className="text-white text-2xl" />
      </div>
    </nav>
  );
};

export default Navigation;
