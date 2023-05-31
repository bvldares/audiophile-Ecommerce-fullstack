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
import { useState } from "react";
import SignInButton from "./SignInButton";
import { useCartStore } from "@/store";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "./Cart";

const Navigation = ({ user }: Session) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartStore = useCartStore();

  const links = ["/", "headphones", "speakers", "earphones"];

  const LinksMenu = links.map((route) => {
    return (
      <li key={nanoid()}>
        <Link
          href={`${route}`}
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white font-semibold uppercase  hover:text-terra cursor-pointer tracking-[2px] "
        >
          {route === "/" ? "Home" : route}
        </Link>
      </li>
    );
  });

  const linksNavigation = links.map((route) => {
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-screen h-screen bg-black bg-opacity-30 fixed inset-0 z-50"
            >
              <motion.div className="fixed inset-0 md:top-0 md:left-0 md:bottom-0 md:right-1/2 bg-almostblack flex">
                <AiOutlineClose
                  className="text-2xl text-white fixed inset-6"
                  onClick={() => setIsOpen((prev) => !prev)}
                />
                <ul
                  className="m-auto flex flex-col text-center gap-5 "
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {LinksMenu}
                  {user ? (
                    <Link
                      href="/dashboard"
                      className="border bg-white py-3 px-6 uppercase tracking-[1.29px] font-bold"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <li>
                      <SignInButton />
                    </li>
                  )}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/**Logo */}
        <Link href="/" className="mr-auto md:mr-0">
          <Image src={logo} alt="logo" width={143} height={25} />
        </Link>

        {/*Navigation links */}
        <ul className="hidden md:flex gap-10 text-xs ml-4">
          {linksNavigation}
        </ul>
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
          <AiOutlineShoppingCart
            className="text-white text-2xl"
            onClick={() => cartStore.toggleCart()}
          />
          {cartStore.cart.length > 0 && (
            <motion.span
              className="absolute right-[-9px] top-[-8px] text-sm rounded-full w-5 h-5 flex items-center justify-center bg-terra text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {cartStore.cart.length}
            </motion.span>
          )}
        </div>
      </div>
      <AnimatePresence>{cartStore.isOpen && <Cart />}</AnimatePresence>
    </nav>
  );
};

export default Navigation;
