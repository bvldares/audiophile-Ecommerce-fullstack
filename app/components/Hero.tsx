import Link from "next/link";
const Hero = () => {
  return (
    <section className="bg-[#191919] h-[500px] flex items-stretch justify-start">
      <div
        className="max-w-6xl w-full h-full px-6 outro:px-10 xl:px-0 mx-auto flex justify-center items-center lg:justify-start 
        bg-hero-mobile outro:bg-hero-tablet lg:bg-hero-desktop lg:bg-[length:1200px_608px] lg:bg-right-bottom bg-no-repeat bg-cover bg-bottom  md:bg-cover 
      "
      >
        <div className="flex flex-col items-center text-center lg:items-start max-w-sm lg:text-left">
          <small className="text-gray-400 tracking-[10px] uppercase mb-4 text-sm ">
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
