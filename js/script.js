$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        scrollBar: true
    });
    $('.burger').click(function (event) {
        $('.burger,.header__menu-block').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__menu-block').click(function (event) {
        $('.burger,.header__menu-block').removeClass('active');
        $('body').removeClass('lock');
    });
})