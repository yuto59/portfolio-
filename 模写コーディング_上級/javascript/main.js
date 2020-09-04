$(function(){
$('.nav_toggle, .nav_menu_li a').on('click', function () {
	$('.nav_toggle, .nav').toggleClass('show');
	$('body, .fv-text ').toggleClass('open')
	});
})