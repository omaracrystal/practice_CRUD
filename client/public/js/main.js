// // add scripts

$(document).on('ready', function() {
  // clear all penguins
  $('#all').html('');
  //get all penguins on DOM load
  getPenguins();
});

// handle form submission
$('form').on('submit', function(e) {
  // clear message
  e.preventDefault();
  var payload = {
    name: $('#name').val(),
    zoo: $('checkbox').prop('checked'),
    nemesis: $('#nemesis').val()
  };
  // send post request to server "syntaxtical suger"
  $.post('/penguins', payload, function(data) {
    //append added
    $('#message').html('Added');
  });
  console.log(payload);
});


function getPenguins() {
  //sent get request to server
  $('#all').html('');
  //send get request to server
  $.get('/penguins', function(data) {
      // loop through array of objects, appending each to the DOM
      for (var i = 0; i < data.length; i++) {
        $('#all').append(data[i])
    };
  })
};


