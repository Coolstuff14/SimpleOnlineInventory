$( document ).ready(function() {

//triggered when modal is about to be shown
$('#testID').on('show.bs.modal', function(e) {

    //get data-id attribute of the clicked element
    var bookId = $(e.relatedTarget).data('table-id');

    //populate the textbox
    console.log(bookId);
    $(e.currentTarget).find('#testIDLabel').html(bookId);
});
});
