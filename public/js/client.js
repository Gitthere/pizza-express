$(document).ready(function() {

  // $ (function() {
  function newPizzaOrder(data) { 
    if (data._id) {
      var veggiesOnPizza = data.toppings.veggies;
      var meatOnPizza = data.toppings.meats;
      var sizeOfPizza = data.size;
      var pizza = veggiesOnPizza + "  " + meatOnPizza + ' <br> ' + sizeOfPizza;
      $('order-list').append('<li>' + pizza + '</li>');
      return;
    } else {
      for (var i = 0; i < data.length; i++) {
        var veggiesOnPizza = data[i].toppings.veggies;
        var meatOnPizza = data[i].toppings.meats;
        var sizeOfPizza = data[i].size;
        var pizza = veggiesOnPizza + "  " + meatOnPizza + ' <br> ' + sizeOfPizza; 
        // console.log(sizeOfPizza);
        $('.order-list').append('<li>' + pizza + '</li>');
      };
    }
  };


    $.ajax("/orders", {
      method: "GET",
      success: newPizzaOrder,

      failure: function(error) {
        console.log(error);
      }

    });


    $('.order-form').submit(function(orders) {
      //format form data into JSON object
      //split (" "), then push
      event.preventDefault();
      $.ajax("/orders", {
        method: "POST",
        data: $('.order-form').serialize(),
        success: newPizzaOrder, 

        failure: function(error) {
        }
      });
    });
});