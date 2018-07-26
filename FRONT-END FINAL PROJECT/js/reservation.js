$('#SubmitBtn').click(function () {
    if ($('.input input').val() == 0) {
        $('.fail').show();
    }
    else {
        $('.fail').hide();

    }
})