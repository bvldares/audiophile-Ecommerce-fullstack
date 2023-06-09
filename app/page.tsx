import Image from "next/image";
import Hero from "./components/Hero";
import ProductNavigator from "./components/ProductNavigator";
import FeaturedProducts from "./components/FeaturedProduct";
import Outro from "./components/Outro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AudioPhile | Home",
  description: "Checkout page for audiophile product delivery",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="flex flex-col gap-40 md:gap-24 lg:gap-[168px] mt-16 lg:mt-28 mb-40 px-6 md:px-10 xl:px-0 max-w-6xl mx-auto">
        <ProductNavigator />
        <FeaturedProducts />
        <Outro />
      </section>
    </main>
  );
}
