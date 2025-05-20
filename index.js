function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 0.55555555;
  console.log(fahrenheit);
  return celsius;
}

console.log(convertToCelsius(50));

function describeTemperature(fahrenheit) {
  if (fahrenheit < 0) {
    console.log(`very cold`);
  } else if (fahrenheit < 20) {
    console.log(`cold`);
  } else if (fahrenheit < 30) {
    console.log(`warm`);
  } else if (fahrenheit < 40) {
    console.log(`hot`);
  } else fahrenheit >= 40;
  console.log(`very hot`);
}
console.log(describeTemperature(55));

const favoriteTemperatureInput = prompt(`Enter your ideal temperature`);
const favoriteTemperature = Number(favoriteTemperatureInput);

console.log(convertToCelsius(50), describeTemperature(55));
