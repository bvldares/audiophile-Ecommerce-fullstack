import Image from "next/image";
export default function Outro() {
  return (
    <section className="outro:flex items-center justify-between gap-10 text-center md:text-left">
      <Image
        alt=""
        src="/assets/shared/mobile/image-best-gear.jpg"
        width={720}
        height={540}
        quality={100}
        className="mx-auto xs:content-outro-tablet outro:content-outro-desktop rounded-lg outro:w-1/2"
      />
      <div className="outro:w-1/2 mt-10 sm:mt-14 outro:mt-0">
        <h2 className="text-3xl md:text-[40px] md:leading-10 font-bold uppercase tracking-[1.4px] mb-8">
          Bringing you the <span className="text-terra">best</span> audio gear
        </h2>
        <p className="text-[15px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
