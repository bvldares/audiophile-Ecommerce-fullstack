import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { CartTypes } from "./types/CartTypes";

type CartState = {
  isOpen: boolean;
  cart: CartTypes[];
  toggleCart: () => void;
  addProduct: (item: CartTypes) => void;
  removeProduct: (item: CartTypes) => void;
  removeAllProduct: () => void;
  paymentIntent: string;
  setPaymentIntent: (val: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,
      paymentIntent: "",
      setPaymentIntent: (val) => set((state) => ({ paymentIntent: val })),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      addProduct: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (element) => element.id === item.id
          );
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === existingItem.id) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item }] };
          }
        }),
      removeAllProduct: () =>
        set((state) => {
          return { cart: [] };
        }),
      removeProduct: (item) =>
        set((state) => {
          //check if item exist and remove
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id == item.id
          );
          if (existingItem && existingItem.quantity > 1) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === existingItem.id) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
              } else {
                return cartItem;
              }
            });
            return { cart: updatedCart };
          } else {
            //remove item from cart
            const filteredArray = state.cart.filter(
              (cartItem) => cartItem.id != item.id
            );
            return { cart: filteredArray };
          }
        }),
    }),
    { name: "cart-store" }
  )
);
