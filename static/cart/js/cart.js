// Use of 'attr' instead of 'data' because we do some dynamic modification of the attribute


const ADD_TO_CART_SELECTOR = '.btn-add-to-cart',
        QUANTITY_INFOS_SELECTOR = '.quantity-left',
        FORMAT_SELECTOR = '.select-format',
        NOTIFICATION_SUCCESS_SELECTOR = '#notification-success',
        NOTIFICATION_ERROR_SELECTOR = '#notification-error';

// try to add element clicked to the cart
$(ADD_TO_CART_SELECTOR).on('click', function(e) {
    e.preventDefault();
    let url = $(this).attr('data-url');
    add_to_cart(url);
})

// change the quantity displayed and url associated with the new format selected
$(FORMAT_SELECTOR).on('change', function() {
    let id_selected = $(this).find('option:selected').data('target-qty-id');
    display_quantity(id_selected);
    change_add_to_cart_url(id_selected);
})


// ----------------------------------------------------------------------------
//                              FUNCTIONS
// ----------------------------------------------------------------------------

/**
 * Change an element of the notification and display it for a definite amount
 * of time
 */
function display_notification_success(element) {
    let notification = $(NOTIFICATION_SUCCESS_SELECTOR);

    notification.find('#text-to-replace').text(element);
    notification.show();
    setTimeout(function() {
        notification.fadeOut('slow')
    }, 2500);
}


function display_notification_error(element) {
    let notification = $(NOTIFICATION_ERROR_SELECTOR);

    notification.find('#text-to-replace').text(element);
    notification.show();
    setTimeout(function() {
        notification.fadeOut('slow')
    }, 2500);
}


/**
 * Display the div that holds the quantity relativ to the object
 * targeted by the select
 */
function display_quantity(id) {
    $(QUANTITY_INFOS_SELECTOR).each(function() {
        if ($(this).data('qty-id') == id) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}


/**
 * change the data('url') of the button, used to know what url to call in ajax
 */
function change_add_to_cart_url(new_id) {
    /**
     * regex takes first part of a url-like string
     * it captures something like that : '/word/other_word/12'
     * and the group take the first part of the string : '/word/other_word'
     * Used to change the number of the url to target antoher element_id
     */
    let regex = /((?:\/|\w)*)\/[0-9]+$/,
        old_url = $(ADD_TO_CART_SELECTOR).attr('data-url'),
        matches = old_url.match(regex);
    if (matches) {
        new_url = matches[1] + '/' + new_id
    }
    $(ADD_TO_CART_SELECTOR).attr('data-url', new_url)
}


// -------------------------------
//              AJAX
// -------------------------------
/**
 * AJAX Call to update the cart
 */
function add_to_cart(url) {
    $.get(url).done(function(data) {
        debugger;
        display_notification_success(data.name)
    }).fail(function() {
        debugger;
        display_notification_error('une erreur est survenue');
    })
}
