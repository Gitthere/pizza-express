$ (function() {

  $.ajax("/orders", {
    method: "GET",
    success: function(data) {
      for (var i = 0; i < data.length; i++) {
        var typeOfPizza = data[i].toppings;
        console.log(typeOfPizza); 
      }
      $('.order-list').data(data);
    },
    failure: function(error) {

    },

  });


});