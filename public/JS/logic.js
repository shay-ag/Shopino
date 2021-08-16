//loader

var preloader = document.getElementById('loading');

function myFunction(){
  preloader.style.display = "none";
}

var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');
var input = document.getElementsByClassName('input-type');
var perItemPrice = document.getElementsByClassName('item-price');
var totalPriceElement = document.getElementsByClassName('total-price');

for( var i = 0; i < incrementButton.length; i++){

  var button = incrementButton[i];

  var currentInput = input[i];

  var currentItemPrice = perItemPrice[i];

  var currentTotalPrice = totalPriceElement[i];

  button.addEventListener('click', function(event){

    var inputValue = currentInput.value;

    var newValue = parseInt(inputValue) + 1;

    currentInput.value = newValue;
    
    var string = currentItemPrice.childNodes[1].childNodes[0].data;

    const number = string.substring(17, string.length);
  
    console.log(currentInput.value);

    var totalPrice = currentInput.value*number;

    currentTotalPrice.innerHTML = "Total Price: " + totalPrice;

  })

}


for( var i = 0; i < decrementButton.length; i++){

  var button = decrementButton[i];

  var currentInput = input[i];

  var currentItemPrice = perItemPrice[i];

  var currentTotalPrice = totalPriceElement[i];

  button.addEventListener('click', function(event){

    var inputValue = currentInput.value;

    var newValue = parseInt(inputValue) - 1;

    currentInput.value = newValue;
    
    var string = currentItemPrice.childNodes[1].childNodes[0].data;

    const number = string.substring(17, string.length);
  
    console.log(currentInput.value);

    var totalPrice = currentInput.value*number;

    currentTotalPrice.innerHTML = "Total Price: " + totalPrice;

  })

}

