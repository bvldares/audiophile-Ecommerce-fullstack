"use client";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store";
import formattedPrice from "@/util/priceFormatter";
import QuantityHandler from "./QuantityHandler";
import { createStore } from "zustand";
export default function Cart() {
  const { cart, toggleCart, addProduct, removeProduct } = useCartStore();

  return (
    <div
      className="fixed z-30 inset-0 py-28 bg-black bg-opacity-50 px-6 outro:px-8"
      onClick={() => toggleCart()}
    >
      {/* THE ACTUAL CART */}
      <div
        className="bg-white text-black p-8 rounded-lg max-w-6xl sm:w-[400px] ml-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold tracking-[1.29px] uppercase">
            Cart {`(${cart.length})`}
          </h3>
          {cart.length > 0 && (
            <button className="text-gray-500 underline text-sm">
              Remove all
            </button>
          )}
        </div>
        {cart.length > 0 && (
          <div>
            {cart.map((cartItem) => {
              return (
                <div
                  key={cartItem.id}
                  className="flex items-center justify-between gap-4 mb-6"
                >
                  <Image
                    src={cartItem.image.substring(1)}
                    width={64}
                    height={64}
                    alt={cartItem.name}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col justify-center mr-auto">
                    <h4 className="font-bold uppercase text-[15px]">
                      {cartItem.name.substring(0, 12)}
                    </h4>
                    <h5 className="text-[13px] text-gray-500 font-bold tracking-[.5px]">
                      {formattedPrice.format(cartItem.unit_amount)}
                    </h5>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="p-3 bg-grey"
                      onClick={() => removeProduct(cartItem)}
                    >
                      -
                    </button>
                    <p className="p-3 bg-grey">{cartItem.quantity}</p>
                    <button
                      className="p-3 bg-grey"
                      onClick={() => addProduct(cartItem)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {cart.length < 1 && (
          <h2 className="text-center py-24 -mt-6 uppercase tracking-wider">
            Your cart is empty
          </h2>
        )}

        {cart.length > 0 && (
          <div>
            <Link
              className="py-[15px] w-full uppercase inline-block text-white text-center bg-terra hover:bg-terralight"
              href="/checkout"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
