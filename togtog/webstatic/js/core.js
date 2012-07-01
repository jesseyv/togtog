/*
 * Scroll to top link handler function
 */
$.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() != "0") {
        $(this).fadeIn("fast");
    }
    var scrollDiv = $(this);
    $(window).scroll(function() {
        if ($(window).scrollTop() == "0") {
            $(scrollDiv).fadeOut("fast");
        } else {
            $(scrollDiv).fadeIn("fast");
        }
    });
    $(this).click(function() {
        $("html, body").animate({scrollTop:0},"fast");
    });
};

var blockName = "#left-menu";
var menuYloc = null;

$(function() {
    $('#scroll-to-top-link').scrollToTop();

    menuEl = $(blockName);
    menuYloc = menuEl.offset().top;

    $(window).scroll(function() {
        var offset = $(document).scrollTop();

        if ((offset - menuYloc) < 0) {
            menuEl.offset({ top: menuYloc });
        } else {
            menuEl.animate(
                { top: offset-menuYloc + 13 },
                { duration: 100, queue: false }
            );
        }
    });
});