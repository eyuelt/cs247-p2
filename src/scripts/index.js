//for debugging purposes
function p(text) {
  console.log(text);
}

//this is probably super inefficient
function layout() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  //set size of pages
  $('.page').width(windowWidth);

  //set fez size and offset
  var fezHeight = windowHeight;
  var fezWidth = fezHeight/3*4;
  $('#fez').height(fezHeight);
  $('#fez').width(fezWidth);
  $('#fez').offset({top:-fezHeight/20, left:-fezWidth/2});

  //set top offset for links
  $('#links').offset({top:windowHeight - 50 - $('#links').height()});

  //set top offset for myname
  $('#myname').offset({top:windowHeight/2 - $('#myname').height()*2/3});
}
layout();

$(window).resize(function(){layout();})
