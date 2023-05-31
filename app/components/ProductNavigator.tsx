import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function ProductNavigator() {
  const sections = [
    {
      id: 1,
      img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      name: "headphones",
      slug: "/headphones",
    },
    {
      id: 2,
      img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      name: "earphones",
      slug: "/earphones",
    },
    {
      id: 3,
      img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      name: "speckers",
      slug: "/speakers",
    },
  ];
  return (
    <section className="flex flex-col items-center gap-14 max-w-6xl mx-auto w-full sm:flex-row sm:gap-8">
      {sections.map((item) => {
        return (
          <div
            className="flex flex-col items-center justify-center w-full bg-grey rounded-lg pb-5"
            key={item.id}
          >
            <Image
              src={item.img}
              alt={item.name}
              width={121}
              height={150}
              quality={100}
              className="relative object-cover bottom-8 h-[104px] w-[80px] md:h-[146px] md:w-[120px]"
            />
            <h3 className="uppercase tracking-[1.29px] -mt-9 mb-4  font-bold text-[13px] lg:text-lg">
              {item.name}
            </h3>
            <Link
              href={item.slug}
              className="flex items-center uppercase text-[13px] text-black opacity-60 font-semibold hover:text-terra"
            >
              shop <IoIosArrowForward className="text-terra" />
            </Link>
          </div>
        );
      })}
    </section>
  );
}
