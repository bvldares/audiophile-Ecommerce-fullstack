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

      {/* ZX7 SECTION*/}
      <section
        className="flex flex-col gap-8 items-start justify-center h-[320px] 
        bg-zx7-mobile sm:bg-zx7-tablet lg:bg-zx7-desktop bg-no-repeat bg-cover bg-right rounded-lg p-6 md:p-14 lg:p-20 max-w-6xl "
      >
        <h2 className="text-3xl font-bold">ZX7 SPEAKER</h2>
        <Link href="/product/zx7-speaker" className="btn-transparent">
          see product
        </Link>
      </section>

      {/* YX1 SECTION*/}
      <section className="flex flex-col sm:flex-row sm:gap-10 gap-6  items-stretch">
        <div
          className="h-[200px] sm:h-[320px] w-full sm:w-1/2 bg-cover bg-center 
        bg-no-repeat bg-yx1-mobile sm:bg-yx1-tablet lg:bg-yx1-desktop rounded-lg"
        ></div>
        <div
          className="h-[200px] sm:h-[320px] w-full sm:w-1/2 flex flex-col items-start
        rounded-lg justify-center p-6 md:p-10 lg:p-24 box-borde bg-[#F1F1F1]"
        >
          <h2 className="text-3xl font-bold mb-8">YX1 EARPHONES</h2>
          <Link href="/product/zx7-speaker" className="btn-transparent">
            see product
          </Link>
        </div>
      </section>
    </section>
  );
}
