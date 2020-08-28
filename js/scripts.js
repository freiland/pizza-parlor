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
  "onions": 1.25,
  "jalapenos": 0.75,
  "garlic": 0.5,
  "pineapple": 0.75,
}


Pizza.prototype.calculatePrice = function () {
  return sizePrice[this.size];
}


//{ this.toppings.forEach(function(topping) {
  //let topPrice = toppingsAdjust[topping];
  //console.log(topPrice)
  
  //return sizePrice[this.size];
  //});
//};




   

// UI Logic //

$(document).ready(function() {
  //attachContactListeners();
  $("form#question").submit(function(event) {
    event.preventDefault();
    
    const inputPizzaSize = $("#size").val();
    
    let topArr = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      const inputToppings = $(this).val();
      
      topArr.push(inputToppings);
      

    });

    function toppingPrice (array) {
      let Arr = [];
      array.forEach(function(topping) {
      Arr.push(toppingsAdjust[topping]);
      })
      return Arr.reduce(function(a, b) {
        return a+ b;
      }, 0);
    };
    console.log(topArr);
    
    let finPrice = toppingPrice(topArr);
    
    console.log(finPrice);
    
    let newPizza = new Pizza (inputPizzaSize, topArr);
    console.log(newPizza);
  
      let price = newPizza.calculatePrice() + finPrice;
  
      $(".answer").text("Your total is $" + price);

    
    
  
    
  });
});

