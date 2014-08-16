$(document).ready(function() {
    $('div.pull-me').click(function() {
        $('div.panel').slideToggle('slow');
    });
});