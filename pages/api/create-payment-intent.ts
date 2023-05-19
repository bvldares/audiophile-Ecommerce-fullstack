import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { CartTypes } from "@/types/CartTypes";
import { PrismaClient } from "@prisma/client";

const stripe = new Stripe(process.env.STRIPE_SECRET as string, {
  apiVersion: "2022-11-15",
});

const calculateOrderAmount = (items: CartTypes[]) => {
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.unit_amount * item.quantity;
  }, 0);
  return totalPrice;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //get user
  const userSession = await getServerSession(req, res, authOptions);
  if (!userSession?.user) {
    res.status(403).json({ message: "Not logged in " });
    return;
  }
  //Extract the data from the body
  const { items, payment_intent_id } = req.body;
  const total = calculateOrderAmount(items);

  //create the order data, this is all prisma code
  const orderData = {
    user: { connect: { id: userSession.user?.id } },
    amount: total,
    currency: "eur",
    status: "pending",
    paymentIntentID: payment_intent_id,
    products: {
      create: items.map((item) => ({
        name: item.name,
        unit_amount: parseFloat(item.unit_amount),
        quantity: item.quantity,
        image: item.image,
      })),
    },
  };

  //check if the payment intent exists update order else update prisma with a new one
  if (payment_intent_id) {
    const currentIntent = await stripe.paymentIntents.retrieve(
      payment_intent_id
    );
    if (currentIntent) {
      const updatedIntent = await stripe.paymentIntents.update(
        payment_intent_id,
        { amount: total }
      );
      //Fetch order with product id
      const [existing_order, updated_order] = await Promise.all([
        prisma.order.findFirst({
          where: { paymentIntentID: updatedIntent.id },
          include: { products: true },
        }),
        prisma.order.update({
          where: { paymentIntentID: updatedIntent.id },
          data: {
            amount: total,
            products: {
              deleteMany: {},
              create: items.map((item) => ({
                name: item.name,
                description: item.description || null,
                unit_amount: parseFloat(item.unit_amount),
                image: item.image,
                quantity: item.quantity,
              })),
            },
          },
        }),
      ]);

      if (existing_order) {
        res.status(400).json({ message: "invalid payment intent" });
      }

      //update existing order
      const updatedOrder = await prisma.order.update({
        where: { id: existing_order?.id },
        data: {
          amount: calculateOrderAmount(items),
          products: {
            deleteMany: {},
            create: items.map((item) => ({
              name: item.name,
              unit_amount: parseFloat(item.unit_amount),
              quantity: item.quantity,
              image: item.image,
            })),
          },
        },
      });
      res.status(200).json({ paymentIntent: updatedIntent });
      return;
    }
  } else {
    //Create a new one
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "eur",
      automatic_payment_methods: { enabled: true },
    });

    orderData.paymentIntentID = paymentIntent.id;
    const newOrder = await prisma.order.create({ data: orderData });

    res.status(200).json({ paymentIntent });
  }
}
