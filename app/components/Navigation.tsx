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
import SignInButton from "./SignInButton";

const Navigation = ({ user }: Session) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["/", "headphones", "speakers", "earphones"];

  const linksEl = links.map((route) => {
    return (
      <li key={nanoid()}>
        <Link
          href={`${route}`}
          className="text-white font-semibold uppercase  hover:text-terra cursor-pointer tracking-[2px] "
        >
          {route === "/" ? "Home" : route}
        </Link>
      </li>
    );
  });

  return (
    <nav className="bg-almostblack ">
      <div className="py-8 px-6 md:px-10 xl:px-0 max-w-6xl lg:pb-9 flex items-center justify-between gap-4 mx-auto">
        <AiOutlineMenu
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        />

        {/*Mobile Menu*/}
        {isOpen && (
          <div
            className="w-screen h-screen bg-black bg-opacity-30 fixed inset-0 z-50"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="fixed inset-0 md:top-0 md:left-0 md:bottom-0 md:right-1/2 bg-almostblack flex">
              <AiOutlineClose
                className="text-2xl text-white fixed inset-6"
                onClick={() => setIsOpen((prev) => !prev)}
              />
              <ul className="m-auto flex flex-col text-center gap-5">
                {linksEl}
                {user ? (
                  <li className="text-white">
                    Logged as {user.name as string}
                  </li>
                ) : (
                  <li>
                    <SignInButton />
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}

        {/**Logo */}
        <Link href="/" className="mr-auto md:mr-0">
          <Image src={logo} alt="logo" width={143} height={25} />
        </Link>

        {/*Navigation links */}
        <ul className="hidden md:flex gap-10 text-xs ml-4">{linksEl}</ul>
        {user ? (
          <Image
            src={user.image as string}
            alt={user.name as string}
            width={32}
            height={32}
            className="ml-auto rounded-full"
          />
        ) : (
          <span className="hidden md:block ml-auto">
            <SignInButton />
          </span>
        )}
        <div className="relative">
          <AiOutlineShoppingCart className="text-white text-2xl" />
          <span className="absolute right-[-9px] top-[-8px] text-sm rounded-full w-5 h-5 flex items-center justify-center bg-terra text-white">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
