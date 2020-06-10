const ADD_TO_CART_SELECTOR = '.btn-add-to-cart',
        QUANTITY_INFOS_SELECTOR = '.quantity-left',
        FORMAT_SELECTOR = '.select-format';

$(ADD_TO_CART_SELECTOR).on('click', function(e) {
    e.preventDefault();
    let url = $(this).data('url')
    add_to_cart(url)
})

$(FORMAT_SELECTOR).on('change', function() {
    // debugger;
    let id_to_display = $(this).find('option:selected').data('target-qty-id');
    $(QUANTITY_INFOS_SELECTOR).each(function() {
        if ($(this).data('qty-id') == id_to_display) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })
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
