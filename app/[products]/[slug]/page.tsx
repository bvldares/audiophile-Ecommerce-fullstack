"use client";
import { usePathname } from "next/navigation";
import data from "@/data.json";
import Link from "next/link";
import Image from "next/image";
import { nanoid } from "nanoid";
import Outro from "@/app/components/Outro";
import AddCart from "@/app/components/AddCart";
import { useState } from "react";
import QuantityHandler from "@/app/components/QuantityHandler";
import formattedPrice from "@/util/priceFormatter";

export default function ProductDeatils() {
  const [quantity, setQuantity] = useState(1);

  const productSlug = usePathname()!.split("/")[2];
  const product = data.find((item) => item.slug === productSlug);

  return (
    <main className="flex flex-col gap-40 md:gap-24 lg:gap-[168px] mt-16 lg:mt-28 mb-40 px-6 md:px-10 lg:px-4 max-w-6xl mx-auto">
      <section className="flex flex-col items-center outro:flex-row gap-14">
        <Image
          src={product!.image.desktop.substring(1)}
          width={540}
          height={560}
          alt={product!.name}
          quality={100}
          className="outro:w-1/2 rounded-lg max-w-[540px] max-h-[560px] w-full"
        />
        <div className="outro:w-1/2 flex flex-col items-center text-center outro:text-left outro:items-start">
          {product!.new && (
            <h3 className="text-terra text-sm tracking-[10px] uppercase">
              New Product
            </h3>
          )}
          <h2 className="text-3xl outro:text-4xl xl:text-5xl font-bold uppercase trackign-[1px] outro:tracking-[1.4px] mb-6  mt-6 outro:mt-4">
            {product!.name}
          </h2>
          <p>{product!.description}</p>
          <h3 className="text-lg font-bold mt-6 mb-4 outro:mb-6 ">
            {formattedPrice.format(product!.price)}
          </h3>
          <div className="flex flex-row-reverse items-center gap-8">
            <AddCart
              name={product?.name as string}
              id={product?.id as number}
              unit_amount={product?.price as number}
              quantity={quantity}
              image={product?.image.desktop as string}
            />
            <QuantityHandler quantity={quantity} setQuantity={setQuantity} />
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-[88px] lg:flex-row lg:items-baseline lg:gap-28">
        {/*Features section */}
        <section className="lg:w-2/3">
          <h2 className="h2-product-details">Features</h2>
          <p>{product!.features}</p>
        </section>

        {/*In The Box section */}
        <section className="outro:flex items-baseline justify-between lg:flex-col lg:items-start lg:w-1/3">
          <h2 className="h2-product-details">In The Box</h2>
          <ul className="flex flex-col gap-2">
            {product?.includes.map((item) => {
              return (
                <li
                  key={nanoid()}
                  className="flex items-center gap-4 opacity-70"
                >
                  <span className="text-terra font-bold">{item.quantity}x</span>
                  {item.item}
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      {/* Gallery Section  */}
      <section className="flex flex-col xs2:grid outro:grid-cols-galleryCol xs2:grid-rows-galleryRow gap-8">
        <Image
          src={product!.gallery.first.desktop.substring(1)}
          alt={product!.name}
          width={445}
          height={280}
          quality={100}
          className="w-full row-start-1 col-start-1 rounded-lg"
        />
        <Image
          src={product!.gallery.second.desktop.substring(1)}
          alt={product!.name}
          width={445}
          height={280}
          quality={100}
          className="w-full row-start-2 col-start-1 rounded-lg"
        />
        <Image
          src={product!.gallery.third.desktop.substring(1)}
          alt={product!.name}
          width={635}
          height={592}
          quality={100}
          className="row-start-1 row-end-3 col-start-2 h-full object-cover rounded-lg"
        />
      </section>

      {/*YOU MAY ALSO LIKE SECTION */}
      <section className="flex flex-col gap-14 outro:flex-row">
        {product!.others.map((item) => {
          const char = item.name[0].toLowerCase;

          const categorySlug =
            char == "x" ? "headphones" : char == "y" ? "earphones" : "speakers";

          return (
            <div key={nanoid()} className="flex flex-col items-center">
              <Image
                src={item.image.desktop.substring(1)}
                alt={item.name}
                width={350}
                height={318}
                className="rounded-lg"
                quality={100}
              />
              <h3 className="my-8 outro:mt-10 font-bold tracking-[1.43px] text-2xl uppercase">
                {item.name}
              </h3>
              <Link
                href={`/${categorySlug}/${item.slug}`}
                className="bg-terra hover:bg-terralight text-white text-xs uppercase tracking-[1px] font-semibold px-8 py-[13px]"
              >
                see product
              </Link>
            </div>
          );
        })}
      </section>
      <Outro />
    </main>
  );
}
