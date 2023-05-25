const getItemPrice = (basePrice, quantity = 0, coef = 0) => {
  const price = basePrice * coef;
  const result = price * quantity;

  return result.toFixed(2);
};

export default getItemPrice;
