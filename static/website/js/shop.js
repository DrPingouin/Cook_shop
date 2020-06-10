const CARD_SELECTOR = '.canned_card',
    INGREDIENTS_ROW_SELECTOR = '.canned_ingredients_row',
    AJAX_WEBSITE_URL = '',
    ADD_TO_CART_SELECTOR = '.btn-add-to-cart',
    NOTIFICATION_SELECTOR = '#notification';

let notification = $(NOTIFICATION_SELECTOR);


$('.caret_img').on('click', function(){
    if ($(this).hasClass('fa-caret-down')) {
        $(this).removeClass('fa-caret-down').addClass('fa-caret-right')
        hide_ingredient_list($(this));
    } else {
        $(this).addClass('fa-caret-down').removeClass('fa-caret-right')
        expand_ingredient_list($(this));
    }

    // if ($(this).hasClass('rotate_90')) {
    //     $(this).removeClass('rotate_90');
    //     hide_ingredient_list($(this));
    // } else {
    //     $(this).addClass('rotate_90');
    //     expand_ingredient_list($(this));
    // }
});

$('#form_search').on('submit', function(e) {
    e.preventDefault();
    data = $(this).serialize();
    update_page(data)
})


$(ADD_TO_CART_SELECTOR).on('click', function(e) {
    e.preventDefault();
    url = $(this).data('url')
    add_to_cart(url)
})



// ----------------------------------------------------------------------------
//                              FUNCTIONS
// ----------------------------------------------------------------------------


/**
 * expand_ingredient_list - description
 *
 * @param  {type} caret_clicked the caret we clicked so that we can target
 *                              the right ingredients to display
 * @return {type}       description
 */
function expand_ingredient_list(caret_clicked) {
    // target row where hidden ingredients are
    row = caret_clicked.parent().siblings(INGREDIENTS_ROW_SELECTOR);
    // add_height_to_card(row)
    row.children().each(function(i, child) {
        $(child).hasClass('three_dots')
        ? $(child).addClass('hidden') : $(child).removeClass('hidden');
    });

    return $(this);
}

function hide_ingredient_list(caret_clicked) {
    row = caret_clicked.parent().siblings(INGREDIENTS_ROW_SELECTOR);
    // remove_height_to_card(row)
    row.children().each(function(i, child) {
        if (i >= 3) {$(child).addClass('hidden');}
        if ($(child).hasClass('three_dots')) { $(child).removeClass('hidden')}
    });
}


function add_height_to_card(ingredients_row) {
    card = row.parents(CARD_SELECTOR);
    children = row.children();
    height_child = $(children[0]).height();

    // height we will add = 18px * row (when row number >= 3)
    // delete 6 because we want 6 item before adding some height
    // divide by 3 because there are 3 items on a row
    // take round number
    number_of_added_rows = Math.round((children.length - 6) / 3)
    card.css({'height': card.height()+(number_of_added_rows * height_child)})
}


function remove_height_to_card(ingredients_row) {
    card = row.parents(CARD_SELECTOR);
    children = row.children();
    height_child = $(children[0]).height();

    number_of_added_rows = Math.round((children.length - 6) / 3)
    card.css({'height': card.height()-(number_of_added_rows * height_child)})
}


function display_notification(element) {
    notification.find('#text-to-replace').text(element);
    notification.show();
    setTimeout(function() {
        notification.fadeOut('slow')
    }, 2500);
}
