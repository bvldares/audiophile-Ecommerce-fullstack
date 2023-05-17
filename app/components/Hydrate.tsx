"use client";

import { useState, useEffect, ReactNode } from "react";
import logo from "@/public/assets/shared/desktop/logo.svg";
import Image from "next/image";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        <>{children}</>
      ) : (
        <div
          className="w-screen h-screen flex justify-center items-center bg-black text-white text-2xl
          uppercase tracking-[1.45px]"
        >
          <Image
            src={logo}
            width={150}
            height={27}
            alt="logo"
            className="object-cover animate-pulse"
          />
        </div>
      )}
    </>
  );
}
