"use client";
import { useState, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { useCartStore } from "@/store";
import formattedPrice from "@/util/priceFormatter";

export default function CheckoutForm({
  clientSecret,
}: {
  clientSecret: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const cartStore = useCartStore();

  const totalPrice = cartStore.cart.reduce((acc, current) => {
    return acc + current.quantity * current.unit_amount;
  }, 0);

  const formatPrice = formattedPrice.format(totalPrice);

  useEffect(() => {
    if (!stripe) {
      console.log("Missing Stripe");
      return;
    }
    if (!clientSecret) {
      console.log("Missing ClientSecret");
      return;
    }
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    stripe
      .confirmPayment({
        elements,
        redirect: "if_required",
      })
      .then((result) => {
        setIsLoading(false);
        console.log("payment done");
      });
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element " options={{ layout: "tabs" }} />
      <div className="flex items-center gap-6 mt-6">
        <h1>
          Total: <span className="font-bold">{formatPrice}</span>
        </h1>
        <button
          className="py-3 px-8 bg-terra hover:bg-terralight  uppercase tracking-[1.29px] text-white flex items-center justify-center"
          id="submit"
          disabled={isLoading || !stripe || !elements}
        >
          <span id="button-text">
            {isLoading ? <span>Processing</span> : <span>Pay Now</span>}
          </span>
        </button>
      </div>
    </form>
  );
}
