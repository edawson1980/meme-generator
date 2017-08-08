/*
build out your main functionality inside function 'main' first,
then you can just run document ready on the function 'main' at the bottom of the page
*/


var main = function(){
  $("#top-bit").keyup(function(){
    $topBit = $("#top-bit").val();
    $(".top-line").text($topBit);
  });
  $("#bottom-bit").keyup(function(){
    $bottomBit = $("#bottom-bit").val();
    $(".bottom-line").text($bottomBit);
  });

};

$(document).ready(main);
