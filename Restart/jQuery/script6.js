$(document).ready(function() {
    $('div').height("200px");
    $('div').width("200px");
    $('div').css("border-radius", "10");
    // above are change CSS block shapes. Below are change HTML contents.
    $('p').html("jQuery magic in action!");
    // Another one not discussed here:$('input:checkbox:checked').val();  It would get value of the first checked checkbox that jQuery finds.
});
