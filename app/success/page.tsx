"use client";
import Image from "next/image";
import { useCartStore } from "@/store";
import truck from "@/public/assets/deliveryTruck.svg";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Succes() {
  const cartStore = useCartStore();
  const router = useRouter();

  useEffect(() => {
    cartStore.removeAllProduct();
    cartStore.setPaymentIntent("");
  }, []);

  return (
    <section
      className="my-20 outro:my-36 outro:m-auto px-6 outro:px-10  
    xl:px-0 w-full h-full flex flex-col lg:flex-row items-center gap-10 justify-start max-w-6xl"
    >
      <Image
        width={500}
        height={350}
        src={truck}
        alt="a delivery truck"
        className="aspect-video flex-shrink"
      />
      <div className="flex flex-col text-center items-center lg:items-start lg:text-left">
        <h1 className="text-2xl font-bold">THANK YOU FOR YOUR ORDER</h1>
        <p className="max-w-sm mt-3">
          Thanks for choosing Audiophile, you will soon receive the purchase
          report on your email address
        </p>
        <Link
          href="/dashboard"
          className="bg-terra hover:bg-terralight w-fit mt-6 text-white uppercase tracking-[1.29px] py-3 px-6"
        >
          Check your dashboard
        </Link>
      </div>
    </section>
  );
}
