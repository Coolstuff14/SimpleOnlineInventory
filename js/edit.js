$( document ).ready(function() {


$('body').on('click', '#edtbtn', function() {
    // do something
    //get data-id attribute of the clicked element
    // var tblID = $(this).data('table-id');
    $('.hideme').show();
    $('#msgbanner').show();
    $('table').editableTableWidget();

});
});
