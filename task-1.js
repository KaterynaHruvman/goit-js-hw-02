const getItemsString = function (array) {
  // Write code under this line
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${[i + 1]} - ${array[i]}\n`;
  }
  return result;
};
console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
