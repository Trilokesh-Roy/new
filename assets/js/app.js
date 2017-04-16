(function($){

	//  mCustomScrollbar Initialize
	$(window).on("load",function(){		
		$(".chat-details, .msg-list, .msg-count").mCustomScrollbar({
			theme:"minimal-dark"
		});
	});


	// Sticky Navigation
	// $('.navigation').stickyfloat( 'update',
	// {
	// 	duration : 0, 
	// 	stickToBottom:true
	// });
	// $('.navigation').stickyfloat();

	// Smooth Scrool
	$('.navigation a[href*=#]:not([href=#])').click(function() {
		$(".navigation li").removeClass("active");
		$(this).parent("li").addClass("active");
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 80
				}, 1000);
				return false;
			}
		}
	});


	$('.one').circleProgress({
		value: 0.4,
		lineCap: 'round'	    
	});
	$('.two').circleProgress({
		value: 0.65,
		lineCap: 'round'	    
	});
	$('.three').circleProgress({
		value: 0.8,
		lineCap: 'round'	    
	});

	// Bootstrap 3 Datepicker
	$('.date').datetimepicker();
	// for developer script
	// $('.date').datetimepicker({
	// 	inline: true,
	// 	format: 'DD/MM/YYYY'
	// }).on('dp.show dp.change', function () {
	// 	// console.log('dp.show or dp.change event');
	// 	$(".datepicker-days").find("th").eq(1).removeAttr('title')
	// 	.css('cursor', 'default')
	// 	.css('color', '#ff5500')
	// 	.css('background', 'inherit').on('click', function (e) {
	// 		e.stopPropagation();
	// 	});
	// });

	// $('.date').data("DateTimePicker").hide();
	// $('.date').data("DateTimePicker").show();


	// Pop Up
	$(".edit-msg").click(function(){
		$('.pop').fadeOut();
		$(".initial-msg").fadeIn().addClass("open");

	});
	$(".edit-custom-msg").click(function(){
		$('.pop').fadeOut();
		$(".custom-msg").fadeIn();
	});
	$(".edit-auto-msg").click(function(){
		$('.pop').fadeOut();
		$(".auto-msg").fadeIn();
	});
	$(".addauto").click(function(){
		$('.pop').fadeOut();
		$(".addauto-msg").fadeIn();
	});
	$(".addcustom").click(function(){
		$('.pop').fadeOut();
		$(".addcustom-msg").fadeIn();
	});
	$(".addgroup").click(function(){
		$('.pop').fadeOut();
		$(".add-group").fadeIn();
	});
	$(".group-list > li > a").click(function(){
		$('.pop').fadeOut();
		$(".edit-group").fadeIn();
	});
	$(".group-edit").click(function(){
		$('.pop').fadeOut();
		$(".edit-group").fadeIn();
	});
	$(".addaccount-btn").click(function(){
		$('.pop').fadeOut();
		$(".addaccount-new").fadeIn();
	});
	$(".editaccount-btn").click(function(){
		$('.pop').fadeOut();
		$(".editaccount-new").fadeIn();
	});
	$(".add-session-btn").click(function(){
		$('.pop').fadeOut();
		$(".add-session").fadeIn();
	});
	$(".edit-session-btn").click(function(){
		$('.pop').fadeOut();
		$(".edit-session").fadeIn();
	});

	$(".group-click-msg").click(function(){
		$(".submenu-inner ul li").removeClass("active");
		$(this).addClass("active");
		$('.group-box').hide();
		$(".group-messages").fadeIn();
	});
	$(".group-click-schedule").click(function(){
		$(".submenu-inner ul li").removeClass("active");
		$(this).addClass("active");
		$('.group-box').hide();
		$(".group-schedule").fadeIn();
	});
	$(".group-click-session").click(function(){
		$(".submenu-inner ul li").removeClass("active");
		$(this).addClass("active");
		$('.group-box').hide();
		$(".group-session").fadeIn();
	});
	$(".group-click-attendees").click(function(){
		$(".submenu-inner ul li").removeClass("active");
		$(this).addClass("active");
		$('.group-box').hide();
		$(".group-attendees").fadeIn();
	});
	$(".group-click-user").click(function(){
		$(".submenu-inner ul li").removeClass("active");
		$(this).addClass("active");
		$('.group-box').hide();
		$(".group-users").fadeIn();
	});
	$(".event-click-msg").click(function(){
		$(".submenu-inner ul li").removeClass("active");
		$(this).addClass("active");
		$('.event-box').hide();
		$(".event-messages").fadeIn();
	});
	$(".event-click-schedule").click(function(){
		$(".submenu-inner ul li").removeClass("active");
		$(this).addClass("active");
		$('.event-box').hide();
		$(".event-schedule").fadeIn();
	});

	
	$(".msg-date .input-group-addon").click(function(){
		$(this).toggleClass('shown');
		$(".message-date").fadeToggle();
	});

	$(".responsive-close-msg").click(function(){
		$(".message-date").fadeToggle();
	});

	
	// Pop Up Close
	$(".close-btn").click(function(){
		$(this).parent().removeClass("open").fadeOut();
	});

	// Responsive 
	
	if ($(window).width() < 768) {
		$(".single-msg-list").click(function(){
			$(".msg-chat").fadeToggle("show");
		});
		$(".responsive-back a").click(function(){
			$(".msg-chat").fadeToggle("show");
		});
		$(".responsive-menu a").click(function(){
			$(".main-sidebar").slideToggle();
		});

		$(".initialclick").click(function(){
			$(".responsive-tab li").removeClass("active");
			$(this).addClass("active");
			$(".single-block").hide();
			$(".initial-block").show();
		});
		$(".customclick").click(function(){
			$(".responsive-tab li").removeClass("active");
			$(this).addClass("active");
			$(".single-block").hide();
			$(".custom-block").show();
		});
		$(".autoclick").click(function(){
			$(".responsive-tab li").removeClass("active");
			$(this).addClass("active");
			$(".single-block").hide();
			$(".auto-block").show();
		});
		$(".groupclick").click(function(){
			$(".responsive-tab li").removeClass("active");
			$(this).addClass("active");
			$(".single-block").hide();
			$(".group-block").show();
		});
	}

	$(".options-menu a").click(function(){
		$(".options-menu-list").removeClass("active");
		$(this).next().addClass("active");


		
		// if ($('#takeonebar').hasClass('slamdown')){
		// 	$('#takeonebar').removeClass('slamdown');  /missing . before removeClass
		// } else {
		// 	$('#takeonebar').addClass('slamdown');
		// }

		// $(this).next().fadeToggle();		
	});
	
	

	$(".btn-msg, .group-msg").click(function(){
		$(".chatbox").slideToggle();
	});
	$(".chat-close, .chat-title-box .responsive-back a").click(function(){
		$(".chatbox").slideToggle();
	});

	$(".nav-accountinfo, .accountclick").click(function(){
		$(".navigation ul li, .responsive-tab.nav li").removeClass("active");
		$(this).addClass("active");
		$(".profile-details > div").hide();
		$(".account-info").fadeIn();
	});
	$(".nav-managepass, .passwordclick").click(function(){
		$(".navigation ul li, .responsive-tab.nav li").removeClass("active");
		$(this).addClass("active");
		$(".profile-details > div").hide();
		$(".manage-password").fadeIn();
	});
	$(".nav-busi-page, .businessclick").click(function(){
		$(".navigation ul li, .responsive-tab.nav li").removeClass("active");
		$(this).addClass("active");
		$(".profile-details > div").hide();
		$(".business-page").fadeIn();
	});
	$(".nav-widget, .widgetsclick").click(function(){
		$(".navigation ul li, .responsive-tab.nav li").removeClass("active");
		$(this).addClass("active");
		$(".profile-details > div").hide();
		$(".widget-page").fadeIn();
	});


	//  Loyalty Page
	$(".loyalty-autoclick").click(function(){
		$(".loyalty-contents .responsive-tab.nav li").removeClass("active");
		$(this).addClass("active");
		$(".loyalty-content > div").hide();
		$(".left-loyalty").fadeIn();
	});
	$(".loyalty-guestclick").click(function(){
		$(".loyalty-contents .responsive-tab.nav li").removeClass("active");
		$(this).addClass("active");
		$(".loyalty-content > div").hide();
		$(".right-loyalty").fadeIn();
	});
	

	//  Setting Page
	$('#setting-select').change(function(){
		if($('#setting-select').val() == 'account-select') {
			$(".profile-details > div").hide();
			$(".account-info").fadeIn();
		} 
		if($('#setting-select').val() == 'password-select') {
			$(".profile-details > div").hide();
			$(".manage-password").fadeIn();
		} 
		if($('#setting-select').val() == 'business-select') {
			$(".profile-details > div").hide();
			$(".business-page").fadeIn();
		} 
		if($('#setting-select').val() == 'widget-select') {
			$(".profile-details > div").hide();
			$(".widget-page").fadeIn();
		} 

	});



	$(".assign-block").hide();
	$(".group-checkbox .g-checkbox").click(function() {
		if($(this).is(":checked")) {
			$(".assign-block").slideDown();
		} else {
			$(".assign-block").slideUp();
		}
	});

	// $(".widget-popup a").click(function(){
	// 	$(this).parent().hide();
	// 	$(".widgetbox").show();
	// });
	// $(".widget-close").click(function(){
	// 	$(".widgetbox").hide();
	// 	$(".widget-popup").show();
		
	// });

	// event-details seddion add script
	$('.add-more-speaker').on("click", function(){
		$('.first-custom-text').clearQueue().fadeOut(1000);
		$('.second-custom-text').clearQueue().fadeIn(5000);
	});

	$('.back-more-speaker').on("click", function(){
		$('.second-custom-text').clearQueue().fadeOut(1000);
		$('.first-custom-text').clearQueue().fadeIn(5000);
	});

	$('.speaker-status-tr').on("click", function(){
		$(this).toggleClass('active');
	});
	$('.ico-waiting').click(function(){
		$(this).attr('src',"assets/images/check-active@2x.png")
		return false;
	});
})(jQuery);