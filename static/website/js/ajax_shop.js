/**
 * take the data from form and update the display
 * with the result of an ajax call
 */
function update_page(data) {
    // check the use of .then(onSuccess, onFailure) instead of .done()
    $.when(send_data(data)).done(function(new_data) {
        if (new_data == undefined) {return;}
        change_display(new_data)
    });
    return;
}

function change_display(ids) {
    $(CARD_SELECTOR).each(function() {
        if (!ids.includes($(this).data('id'))) {
            $(this).addClass('hidden');
            $(this).next().addClass('hidden');
        } else {
            $(this).removeClass('hidden');
            $(this).next().removeClass('hidden')
        }
    });
    return;
}

/**
 * send an ajax request to the shop url, to dynamically update card we need
 * return list of ids
 */
function send_data(data) {
    return $.post(AJAX_WEBSITE_URL, data).done(function(new_data) {
        return new_data.data
    }).fail(function() {
        alert('une erreur est survenue');
    })
}
