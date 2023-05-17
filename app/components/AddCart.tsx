"use client";

import { useCartStore } from "@/store";
import { CartTypes } from "@/types/CartTypes";

export default function AddCart({
  name,
  id,
  unit_amount,
  quantity,
  image,
}: CartTypes) {
  const cartStore = useCartStore();
  const cartItem = { id, name, unit_amount, quantity, image };
  return (
    <button
      className="px-8 py-4 text-[13px] text-white font-bold uppercase tracking-[1.43px] bg-terra hover:bg-terralight"
      onClick={() => cartStore.addProduct(cartItem)}
    >
      Add to cart
    </button>
  );
}
