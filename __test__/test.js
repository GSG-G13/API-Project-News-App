const { convertToCelsius, x } = require("../js/pure.js");

test("Convert the temp to Celsius", function () {
  expect(convertToCelsius(x)).toBe("-268.15");
});
