"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Outro from "../components/Outro";
import ProductNavigator from "../components/ProductNavigator";
import data from "@/data.json";
import Link from "next/link";

export default function Products() {
  const path = usePathname()?.substring(1);
  const filteredData = data.filter((item) => item.category === path);

  const products = filteredData.map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col items-center md:flex-row gap-14"
      >
        <Image
          src={item.categoryImage.desktop.substring(1)}
          width={540}
          height={560}
          alt={item.name}
          quality={100}
          className="rounded-lg md:w-1/2 "
        />
        <div className="md:w-1/2 flex flex-col items-center text-center md:text-left md:items-start">
          {item.new && (
            <h3 className="text-terra text-sm tracking-[10px] uppercase">
              New Product
            </h3>
          )}
          <h2 className="text-3xl outro:text-4xl xl:text-5xl font-bold uppercase trackign-[1px] outro:tracking-[1.4px] mb-6 outro:mb-8 mt-6 outro:mt-4">
            {item.name}
          </h2>
          <p>{item.description}</p>
          <Link
            className="py-[15px] px-8 bg-terra text-white tracking-[1px] hover:bg-terralight mt-6 outro:mt-8"
            href={`${path}/${item.slug}`}
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    );
  });
  return (
    <main>
      <section className="flex flex-col gap-40 md:gap-24 lg:gap-[168px] mt-16 lg:mt-28 mb-40 px-6 md:px-10 xl:px-0 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse gap-28 outro:[&>*:nth-child(even)]:flex-row-reverse [&>*:nth-child(even)]:flex-col">
          {products}
        </div>
        <ProductNavigator />
        <Outro />
      </section>
    </main>
  );
}
