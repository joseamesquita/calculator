// Business (or back-end) logic:

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

// User interface (or front-end) logic:


$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    // alert(add(number1, number2));
    var result = add(number1, number2); //removes the alert box
    $("#output").text(result).toggle();
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    // alert(add(number1, number2));
    var result = subtract(number1, number2); //removes the alert box
    $("#output2").text(result).toggle();
  });

  $("form#multiply").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output3").text(result).toggle();
  });

  $("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#output4").text(result).toggle();
  });

});