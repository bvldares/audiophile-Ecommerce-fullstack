import Link from "next/link";
const Hero = () => {
  return (
    <section className="bg-almostblack p-6 bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-no-repeat bg-cover bg-right-bottom">
      <div className="max-w-6xl mx-auto flex justify-center items-center lg:justify-start h-[500px]">
        <div className="flex flex-col items-center text-center lg:items-start max-w-sm lg:text-left">
          <small className="text-grey tracking-widest uppercase mb-4 text-sm ">
            New product
          </small>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase font-bold text-white mb-6">
            XX99 Mark II Headphones
          </h1>
          <p className="text-grey mb-[28px] max-w-[350px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/product/xx99-mark-two-headphones"
            className="bg-terra hover:bg-terralight text-white text-xs uppercase tracking-[1px] font-semibold px-8 py-[13px]"
          >
            See product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
