import { nanoid } from "nanoid";
import Link from "next/link";
import logo from "@/public/assets/shared/desktop/logo.svg";
import Image from "next/image";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
export default function Footer() {
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
    <section className="bg-almostblack">
      <div
        className="py-8  px-6 md:px-10 xl:px-0 max-w-6xl lg:pb-9 mx-auto
        flex flex-col items-center justify-center gap-4 text-white
      "
      >
        <div className="w-full flex flex-col outro:flex-row items-center justify-between gap-10">
          <Image width={143} height={25} src={logo} alt="logo" />
          <ul className="flex flex-col items-center text-center outro:flex-row outro:items-start gap-6 outro:gap-10 ">
            {linksEl}
          </ul>
        </div>
        <p className="text-center outro:text-left outro:w-1/2 outro:self-start my-4">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col items-center gap-4 outro:flex-row outro:justify-between w-full">
          <p className="">Copyright 2021. All Rights Reserved</p>
          <div className="flex gap-3">
            <AiFillFacebook className="text-3xl hover:text-terra cursor-pointer" />
            <AiOutlineTwitter className="text-3xl hover:text-terra cursor-pointer" />
            <AiFillInstagram className="text-3xl hover:text-terra cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}
