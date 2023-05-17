const formattedPrice = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

export default formattedPrice;
