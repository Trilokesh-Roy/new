$(document).ready(function(){
	$(".calender-ico").click(function(){
		$(this).toggleClass('active');
		$(".check-in-out-block ").toggle();
		$(".message-block").toggle();
	});
	$('.datetimepicker1').datetimepicker();
});
