import { useCartStore } from "@/store";

export default function Succes() {
  const cartStore = useCartStore();
  return (
    <div className="my-auto mx-auto">
      <h1>The order has been made!</h1>
      <p>You will receive a confirmation email in your inbox</p>
    </div>
  );
}
