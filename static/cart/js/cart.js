const ADD_TO_CART_SELECTOR = '.btn-add-to-cart';

$(ADD_TO_CART_SELECTOR).on('click', function(e) {
    e.preventDefault();
    url = $(this).data('url')
    add_to_cart(url)
})


// ----------------------------------------------------------------------------
//                              FUNCTIONS
// ----------------------------------------------------------------------------

function display_notification(element) {
    notification.find('#text-to-replace').text(element);
    notification.show();
    setTimeout(function() {
        notification.fadeOut('slow')
    }, 2500);
}
