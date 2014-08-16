$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    $(document).on('click', '.item', remove() {
        $(this).remove();
    });
});


// ".on" should be inside '$(document).ready() {};', but outside of '.click() {}';
// Syntax: $(document).on('event', 'selector', function() { // do sth! });
/* In this case, usual way as following won't work:
$('.item').click(function() {
    $(this).remove();
});
// because after DOM loaded, all .item has been removed, so nothing left to remove.
*/
