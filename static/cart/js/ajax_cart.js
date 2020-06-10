function add_to_cart(url) {
    $.get(url).done(function(data) {
        display_notification(data.name)
    }).fail(function() {
        alert('une erreur est survenue');
    })
}
