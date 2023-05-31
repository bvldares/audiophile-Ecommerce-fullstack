"use client";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "@/store";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CheckoutForm from "../components/CheckoutForm";
import formattedPrice from "@/util/priceFormatter";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE!);

export default function Checkout() {
  const router = useRouter();
  const cartStore = useCartStore();
  const [clientSecret, setClientSecret] = useState("");

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
        setClientSecret(data.paymentIntent.client_secret);
        cartStore.setPaymentIntent(data.paymentIntent.id);
      });
  }, []);

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

  const totalPrice = cartStore.cart.reduce((acc, current) => {
    return acc + current.unit_amount * current.quantity;
  }, 0);

  const taxes = (totalPrice * 0.22).toFixed(2);

  return (
    <section className="max-w-6xl w-full mx-auto  px-6 md:px-10 xl:px-0 my-12 outro:my-10 lg:my-16">
      <Link
        href="/"
        className="text-sm flex items-center gap-3 uppercase mb-4  bg-gray-100 p-2 box-border rounded-lg w-fit"
      >
        <BiArrowBack />
        Continue shopping
      </Link>
      <section className="outro:flex items-center w-full gap-10">
        {clientSecret && (
          <>
            <div className="mb-10 outro:mb-0 p-8 w-full bg-gray-100 rounded-lg">
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm clientSecret={clientSecret} />
              </Elements>
            </div>

            <section className="py-8 px-6 w-full outro:max-w-sm bg-gray-100 rounded-lg">
              <h2 className="font-bold text-lg uppercase tracking-[1.29px] mb-6 outro:mb-8">
                Summary
              </h2>
              {cartStore.cart.map((cartItem) => {
                return (
                  <div
                    key={cartItem.id}
                    className="flex items-center gap-4 mb-4 rounded-lg bg-white p-3"
                  >
                    <Image
                      src={cartItem.image.substring(1)}
                      width={64}
                      height={64}
                      alt={cartItem.name}
                      quality={100}
                      className="aspect-square rounded-lg"
                    />
                    <div>
                      <h3 className="text-sm font-bold">{cartItem.name}</h3>
                      <p className="text-xs text-gray-600">
                        {formattedPrice.format(cartItem.unit_amount)}
                      </p>
                    </div>
                    <p className="text-gray-600 ml-auto">
                      x{cartItem.quantity}
                    </p>
                  </div>
                );
              })}
              <section className="flex flex-col gap-2 mt-4">
                <h3 className="text-gray-600 flex items-center">
                  TOTAL
                  <span className="ml-auto font-bold">
                    {formattedPrice.format(totalPrice)}
                  </span>
                </h3>
                <h3 className="text-gray-600 flex items-center">
                  VAT (INCLUDED)
                  <span className="ml-auto font-bold">
                    {formattedPrice.format(parseInt(taxes))}
                  </span>
                </h3>
                <h3 className="text-gray-600 flex items-center">
                  SHIPPING
                  <span className="ml-auto font-bold">FREE</span>
                </h3>
              </section>
            </section>
          </>
        )}
      </section>
    </section>
  );
}
