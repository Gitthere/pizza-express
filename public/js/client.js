$(document).ready(function() {

  // $ (function() {
  function newPizzaOrder(data) { 
    if (data._id) {
      var veggiesOnPizza = data.toppings.veggies;
      var meatOnPizza = data.toppings.meats;
      var sizeOfPizza = data.size;
      var pizza = veggiesOnPizza + "  " + meatOnPizza + ' <br> ' + sizeOfPizza;
      //add li so that can append delete button
      $('.order-list').append('<li>' + pizza + '</li>').append;
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
      //keeps browser from sending info to server
      event.preventDefault();
      $.ajax("/orders", {
        method: "POST",
        data: $('.order-form').serialize(),//takes data out of the form 
        //and makes it a JSON object i.e. toppings.meats into an array
        success: newPizzaOrder, 

        failure: function(error) {
        }
      });
    });
});