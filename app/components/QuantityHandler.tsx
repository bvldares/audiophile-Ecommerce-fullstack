export default function QuantityHandler(props: any) {
  return (
    <div className="flex items-center">
      <button
        className="toggleQuantityBtn"
        onClick={() =>
          props.setQuantity((prev: number) => (prev > 1 ? prev - 1 : 0))
        }
      >
        -
      </button>
      <p className="toggleQuantityBtn">{props.quantity}</p>
      <button
        className="toggleQuantityBtn"
        onClick={() => props.setQuantity((prev: number) => prev + 1)}
      >
        +
      </button>
    </div>
  );
}
