import Image from "next/image";
import Link from "next/link";
export default function FeaturedProducts() {
  return (
    <section className="w-full flex flex-col gap-12">
      <div
        className="bg-terra rounded-lg flex flex-col items-center gap-8 md:gap-16 lg:flex-row
       lg:gap-36 p-14 px-6 md:px-10 lg:px-0 bg-bg-circles-pattern bg-cover bg-no-repeat bg-bottom 
       overflow-y-hidden lg:justify-center
       "
      >
        <Image
          src="/assets/home/desktop/image-speaker-zx9.png"
          alt="zx9"
          width={410}
          height={493}
          className="z-10 relative lg:top-20 w-[172px] h-[207px] md:w-[197px] md:h-[237px] lg:w-[410px] lg:h-[493px]"
        />
        <div className="text-white text-center lg:text-left max-w-[350px] ">
          <h2 className="font-bold text-4xl tracking-[1.29px] md:tracking-[2px] md:text-6xl">
            ZX9 SPEAKER
          </h2>
          <p className="my-6 md:mb-10">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/product/zx9-speaker" className="btn-black">
            see product
          </Link>
        </div>
      </div>
    </section>
  );
}
