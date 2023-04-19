export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-In', {
    style: 'currency',
    currency: 'INR',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
