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
let moneyTop = [];

Pizza.prototype.calculatePrice = function () { this.toppings.forEach(function(topping) {
  
  moneyTop.push(toppingsAdjust[topping]);
  console.log(moneyTop);
  //let topMoney = toppingsAdjust[topping];
  //console.log(topMoney);
  let sumArr = moneyTop.reduce(function(a, b) {
    return a + b;
  } ,0);
  console.log(sumArr);
  return sizePrice[this.size] + sumArr;
})

  //return sizePrice[this.size] +;
};

// UI Logic //

$(document).ready(function() {
  //attachContactListeners();
  $("form#question").submit(function(event) {
    event.preventDefault();
    //const inputAgeInt = parseInt($("input#age").val());
    const inputPizzaSize = $("#size").val();
    //const inputTime = $("#time").val();
    let topArr = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      const inputToppings = $(this).val();
      
      topArr.push(inputToppings);
      

    });
    console.log(topArr);
    
    
    let newPizza = new Pizza (inputPizzaSize, topArr);
    console.log(newPizza);
  
      let price = newPizza.calculatePrice();
  
      $(".answer").text("$ " + price);

    
    //let ageBracket = ageAssign(inputAgeInt);
  
    
  });
});

