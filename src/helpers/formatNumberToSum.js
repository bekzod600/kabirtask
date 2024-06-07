const numberFunction = (number) => {
  const abbreviations = [
    { value: 1e9, symbol: "mlrd" },
    { value: 1e6, symbol: "mln" },
    { value: 1e3, symbol: "k" },
  ];

  // Loop through the abbreviations
  for (let i = 0; i < abbreviations.length; i++) {
    // Check if the number is greater than or equal to the current magnitude
    if (number >= abbreviations[i].value) {
      // Calculate the abbreviated number
      const abbreviated = number / abbreviations[i].value;
      // Round the abbreviated number to one decimal place
      const rounded = Math.round(abbreviated * 10) / 10;
      // Return the abbreviated number with the corresponding symbol
      return rounded.toString() + abbreviations[i].symbol;
    }
  }
  // If the number is less than 1000, return the number itself
  return number.toString();
};

export default numberFunction;
