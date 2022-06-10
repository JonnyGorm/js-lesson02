var tempCelsius = prompt("Temerature in celsius?");
var toFahrenheight = tempCelsius * 1.8 + 32;

console.log(
  `Outside my friend's house it's  ${+tempCelsius}ºC which is ${toFahrenheight.toFixed(
    0
  )}ºF.`
);
