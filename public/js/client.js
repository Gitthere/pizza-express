$ (function() {

  $.ajax("/orders", {
    method: "GET",
    success: function(data) {
      console.log('success');
    },
    failure: function(error) {

    },

  });


});