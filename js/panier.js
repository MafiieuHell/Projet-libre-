$("#cart").on({
    mouseenter: function () {
        $("#cart-dropdown").show();
    },
    mouseleave: function () {
        timeout = setTimeout(function () {
            $("#cart-dropdown").hide();
        }, 200);
    },
});

$("#cart-dropdown").on({
    mouseenter: function () {
        clearTimeout(timeout);
    },
    mouseleave: function () {
        $("#cart-dropdown").hide();
    },
});
