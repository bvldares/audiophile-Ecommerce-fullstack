import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { FiPackage } from "react-icons/fi";
import priceFormatter from "@/util/priceFormatter";
import Image from "next/image";

export const revalidate = 0;

const fetchOrders = async () => {
  const prisma = new PrismaClient();
  const user = await getServerSession(authOptions);

  if (!user) {
    return null;
  } else {
    const orders = await prisma.order.findMany({
      where: { userId: user.user?.id },
      include: {
        products: true,
      },
    });
    return orders;
  }
};

export default async function dashboard() {
  const order = await fetchOrders();

  return (
    <main className="px-6 outro:px-10 xl:px-0 py-14 max-w-6xl mx-auto w-full">
      {order?.length == 0 ? (
        <h1 className="text-2xl outro:text-3xl mb-4">No orders </h1>
      ) : (
        <h1 className="text-2xl outro:text-3xl mb-4">Here is your order! </h1>
      )}
      <section className="flex flex-col gap-10">
        {order?.map((item) => {
          const date = new Date(item.createdAt).toDateString();
          return (
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-4 max-w-3xl"
              key={item.id}
            >
              <div>
                <h2 className="font-bold">
                  Amount:{" "}
                  <span className="font-normal">
                    {priceFormatter.format(item.amount)}
                  </span>
                </h2>
                <h2 className="font-bold">
                  Time:
                  <span className="font-normal">{date.toString()}</span>
                </h2>
                <h2 className="font-bold">
                  Number of products:{" "}
                  <span className="font-normal">
                    {item.products.reduce((acc, curr) => {
                      return acc + curr.quantity;
                    }, 0)}
                  </span>
                </h2>
                <h3 className="font-bold">
                  Order ID: <span className="font-normal">{item.id}</span>
                </h3>
                <h3 className="font-bold flex mt-1 items-center gap-1">
                  Status:
                  <span
                    className={` py-1 px-2 text-xs uppercase inline-block rounded-sm ${
                      item.status === "pending"
                        ? "bg-yellow-300"
                        : "bg-green-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </h3>
              </div>
              <div className="flex gap-4">
                {item.products.map((product) => (
                  <Image
                    width="80"
                    height="80"
                    alt={product.name}
                    src={product.image?.substring(1) as string}
                    className="rounded-lg h-[65px] w-[65px] sm:h-[80px] sm:w-[80px]"
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
