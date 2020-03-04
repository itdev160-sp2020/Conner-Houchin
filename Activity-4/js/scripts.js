//welcome message
var user = 'Conner';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here is the latest review!';
var greetingEL = document.getElementById('greeting')

greetingEL.textContent = greeting;

//product price
var price = 20,
    primeDiscount = .10,
    primePrice = price - (price * primeDiscount),
    priceEl = document.getElementById('msrp'),
    primePriceEL = document.getElementById('amazon');

    priceEl.textContent = price.toFixed(2);
    primePriceEL.textContent = primePrice.toFixed(2);