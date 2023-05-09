import Link from "next/link";
const Hero = () => {
  return (
    <section className="flex flex-col gap-4 items-center text-center">
      <small>New product</small>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link
        href="/product/xx99-mark-two-headphones"
        className="bg-terra hover:bg-terralight text-white text-xs uppercase tracking-[1px] font-semibold px-8 py-[13px]"
      >
        See product
      </Link>
    </section>
  );
};

export default Hero;
