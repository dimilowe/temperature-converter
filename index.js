function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 0.55555555;
  //console.log(fahrenheit);
  return celsius;
}

//console.log(convertToCelsius(50));

function describeTemperature(celsius) {
  if (celsius < 0) {
    return `very cold`;
  } else if (celsius < 20) {
    return `cold`;
  } else if (celsius < 30) {
    return `warm`;
  } else if (celsius < 40) {
    return `hot`;
  } else {
    return `very hot`;
  }
}
//console.log(describeTemperature(0));

const favoriteTemperatureInput = prompt(`Enter your ideal temperature`);
const favoriteTemperature = Number(favoriteTemperatureInput);

//console.log(convertToCelsius(50), describeTemperature(55));

alert(
  `${favoriteTemperature} degrees fahrenheit is equal to ${convertToCelsius(
    favoriteTemperature
  )} degrees celsius.  That feels ${describeTemperature(
    convertToCelsius(favoriteTemperature)
  )}.`
);
