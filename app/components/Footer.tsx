import { nanoid } from "nanoid";
import Link from "next/link";
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
    <section className="w-full py-10 md:py-14 lg:pt-20 lg:pb-16 bg-black">
      <ul className="flex gap-10">{linksEl}</ul>
    </section>
  );
}
