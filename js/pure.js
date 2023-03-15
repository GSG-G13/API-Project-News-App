let x = 5;
let convertToCelsius = function (temp) {
  return (Number(temp) - 273.15).toFixed(2);
};
module.exports = {
  convertToCelsius,
  x,
};
