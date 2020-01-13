var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

var bmi = function(height, weight){
  return weight / (height*height);
};

var convertToFahrenheit = function(celcius) {
return (celcius*9)/5 + 32;
}

var convertToCelcius = function(fahrenheit) {
return ((fahrenheit-32)*5)/9;
}

var gallonsToLiters = function(gallons){
return (gallons / 0.264);
};

var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));

alert(add(number1, number2));
alert(subtract(number1, number2));
alert(multiply(number1, number2));
alert(divide(number1, number2));