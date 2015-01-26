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

  (function layoutFrontPage() {
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
  })();

  (function layoutProjectPage() {
    //set tardis size and offset
    var tardisHeight = windowHeight*1.1;
    var tardisWidth = tardisHeight/16*9;
    var tardisLeft = $('#projectspage').offset().left + windowWidth - tardisWidth*2/3;
    $('#tardis').height(tardisHeight);
    $('#tardis').width(tardisWidth);
    $('#tardis').offset({top:-tardisHeight/20, left:tardisLeft});
  })();
}
layout();

$(window).resize(function(){layout();});
