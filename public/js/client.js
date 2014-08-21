$ (function() {

  $.ajax("/orders", {
    method: "GET",
    success: function(data) {
      for (var i = 0; i < data.length; i++) {
        var veggiesOnPizza = data[i].toppings.veggies;
        var meatOnPizza = data[i].toppings.meats;
        var sizeOfPizza = data[i].size;
        var pizza = veggiesOnPizza + meatOnPizza + sizeOfPizza;
        // console.log(typeOfPizza); 
        console.log(sizeOfPizza);
        $('.order-list').append('<li>' + pizza + '</li>');
        // $('.order-list').append('<li>' + sizeOfPizza + '</li>');
      }
    },
    failure: function(error) {

    },

  });


});