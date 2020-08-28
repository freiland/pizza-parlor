// Business Logic //

function Pizza (size, toppings) {
  this.size = size 
  this.toppings = toppings
}

let sizePrice = {
  0: 7,
  1: 9,
  2: 13,
  3: 16,
  4: 21
}

// toppings should be a check box form on html.
// for each topping checked it should add that to price 

let toppingsAdjust = {
  "cheese": 0,
  "pepperonni": 1.50,
  "sausage": 2,
  "onions and peppers": 1.25,
  "jalapenos": 0.75,
  "garlic": 0.5,
  "pineapple": 0.75,
}

Pizza.prototype.calculatePrice = function () {
  return sizePrice[this.size] + toppingsAdjust[this.toppings];
}

// UI Logic //

$(document).ready(function() {
  //attachContactListeners();
  $("form#question").submit(function(event) {
    event.preventDefault();
    //const inputAgeInt = parseInt($("input#age").val());
    const inputPizzaSize = $("#size").val();
    const inputTime = $("#time").val();
    $("input:checkbox[name=toppings]:checked").each(function() {
      const inputToppings = $(this).val();
      let topArr = [];
      topArr.push(inputToppings);
    });
    $('#transportation_survey').hide();

  
    let ageBracket = ageAssign(inputAgeInt);
  
    let newTicket = new Ticket (ageBracket, inputMovieTitle, inputTime);
  
    let price = newTicket.calculatePrice();
  
    $(".answer").text(price);
  });
});

