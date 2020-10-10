$(document).ready(function() {
    $('.header').height($(window).height());
})

//page pagination

$('li').click(function() {
  $(this).addClass('active').siblings().removeClass('active');
});
