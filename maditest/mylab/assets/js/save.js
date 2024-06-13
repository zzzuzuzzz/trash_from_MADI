$('#selectLevel').change(function (event) {
    event.preventDefault();

    let select = $('select[name="select"]').val();

    $.ajax({
        url: 'vendor/save.php',
        type: 'POST',
        dataType: 'json',
        data: {
            select: select
        },
        success (data) {

            if (data.status) {
            } else {
                if (data.type === 1) {
                    alert(data.message)
                }
            }
        }
    });
});