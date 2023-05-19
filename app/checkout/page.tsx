"use client";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "@/store";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE!);

export default function Checkout() {
  const router = useRouter();
  const cartStore = useCartStore();
  const [clientSecret, setClientSecret] = useState(0);

  useEffect(() => {
    //Create a payment intent as soon the page load
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartStore.cart,
        payment_intent_id: cartStore.paymentIntent,
      }),
    })
      .then((res) => {
        if (res.status === 403) {
          console.log("USER MUST LOGIN FOR CHECKING OUT");
          router.push("/api/auth/signin");
        }
        return res.json();
        //se l'user non è loggato lo mandiamo indietro altrimenti utilizziamo gli elementi del login per creare il client secret
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <h1>CHECKOUT PAGE</h1>;
}
