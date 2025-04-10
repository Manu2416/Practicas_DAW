$(".btn").click(function () {
    let icono = $(this).find(".btn__icon");
    let title = $(this).find(".btn__title");

    if ($(this).hasClass("collapsed")) {
        icono.addClass("btn__icon--selected");
        title.addClass("btn__title--selected");
    } else {
        icono.removeClass("btn__icon--selected");
        title.removeClass("btn__title--selected");
    }

});
