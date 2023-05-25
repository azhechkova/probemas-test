const getItemPrice = (basePrice, quantity = 0, coef = 0) => {
  const price = basePrice * coef;

  return price * quantity;
};

export default getItemPrice;
