// It can take 2 functions as input: first hover in, second hover out: '.hover(function1(), function2())';

$(document).ready(function(){

  $('div').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );

});