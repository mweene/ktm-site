$(document).ready(function() {
    $('.header').height($(window).height());
})

//page pafination

$('li').click(function() {
  $(this).addClass('active').siblings().removeClass('active');
});
