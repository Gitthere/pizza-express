$ (function() {

  $.ajax("/orders", {
    method: "GET",
    success: function(data) {
      for (var i = 0; i < data.length; i++) {
        var veggiesOnPizza = data[i].toppings.veggies;
        var meatOnPizza = data[i].toppings.meats;
        var sizeOfPizza = data[i].size;
        var pizza = veggiesOnPizza + meatOnPizza + '<br>' + sizeOfPizza + '</br>'; 
        // console.log(sizeOfPizza);
        $('.order-list').append('<li>' + pizza + '</li>');
      }
    },

    failure: function(error) {
    }

  });

  $('#submitOrderButton').click(function() {
    //format form data into JSON object
    //split (" "), then push
    var newOrder = {};
    newOrder.size = $('.size_input');
    newOrder.toppings = {};
    newOrder.toppings.meat = $('.meatToppings_input');
    console.log(newOrder);
    // $.ajax("/orders", {
    //   method: "POST",
    //   success: function(orders) {
    //     console.log('post success');
    //   },

    //   failure: function(error) {
    //   }

    // });
  })

});