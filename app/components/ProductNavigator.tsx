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
    <section className="flex flex-col items-center gap-8 max-w-6xl mx-auto w-full sm:flex-row">
      {sections.map((item) => {
        return (
          <div className="flex flex-col items-center justify-center w-full bg-grey rounded-lg pb-5">
            <Image
              src={item.img}
              alt={item.name}
              width={90}
              height={101}
              className="relative object-cover bottom-8 lg:h-[160px] lg:w-[123px]"
            />
            <h3 className="uppercase tracking-[1.29px] -mt-9 mb-4  font-semibold text-[13px] lg:text-lg">
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