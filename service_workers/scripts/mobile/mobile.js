$(document).on( "mobileinit", function() {
	$.mobile.loader.prototype.options.text = "loading";
	$.mobile.loader.prototype.options.textVisible = false;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.loader.prototype.options.html = "";
});

function showLoading(){
	$.mobile.loading('show');

};

function hideLoading(){
	$.mobile.loading('hide');
};

$( window ).on( "navigate", function( event, data ){
	hideLoading();
});

$(document).ready(function(){
	/* list pages: expand / contract */
	$(".mobile-tasklist-block-expand").click(function(){
		
		if ($(this).parent().find(".mobile-tasklist-block-expandedinfo").first().is(":hidden")){	
			$(this).parent().find(".mobile-tasklist-block-expandedinfo").slideDown();
			$(this).children(".icon").removeClass("icon_carat_down").addClass("icon_carat_up");
			$(this).parent().children(".mobile-tasklist-block-icons").css("opacity","0");
			/*$(this).parent().find(".mobile-tasklist-block-check").css("height","107%");*/
			return;
		}
		else{
			$(this).parent().find(".mobile-tasklist-block-expandedinfo").slideUp();
			$(this).children(".icon").removeClass("icon_carat_up").addClass("icon_carat_down");
			$(this).parent().children(".mobile-tasklist-block-icons").css("opacity","1");
			/*$(this).parent().find(".mobile-tasklist-block-check").css("height","111%");*/
		}
		
	})
	
	/* expand / contract (any elements) */
	
	$(".mobile-expand").click(function(){
		
		if ($(this).next(".mobile-expand-content").is(":hidden")){	
			$(this).next(".mobile-expand-content").slideDown();
			$(this).removeClass("ui-icon-carat-d").addClass("ui-icon-carat-u");
			return;
		}
		else{
			$(this).next(".mobile-expand-content").slideUp();
			$(this).removeClass("ui-icon-carat-u").addClass("ui-icon-carat-d");
		}
		
	})

	$("#mobile_tasklist_alerts_trigger").click(function(){
		if (!$(this).hasClass("mobile_expand_arrow")){
			$(this).addClass("mobile_expand_arrow");
			$(".mobile-tasklist-alerts").slideUp();
			return;
		}
		else{
			$(this).removeClass("mobile_expand_arrow");
			$(".mobile-tasklist-alerts").slideDown();
		}
	})
	$("#mobile_tasklist_messages_trigger").click(function(){
		if (!$(this).hasClass("mobile_expand_arrow")){
			$(this).addClass("mobile_expand_arrow");
			$(".mobile-tasklist-messages").slideUp();
			return;
		}
		else{
			$(this).removeClass("mobile_expand_arrow");
			$(".mobile-tasklist-messages").slideDown();
		}
	})

	$(".mobile-billable_items_expand_trigger").click(function(){
		if ($(".mobile-billable_items_info_detailed").css("display") == "none"){
			$(".mobile-billable_items_info_detailed").slideDown();
			$(".mobile-billable_items_info_basic").slideUp();
			$(this).html("Click here to hide details ▲");
			return;
		}
		else{
			$(".mobile-billable_items_info_detailed").slideUp();
			$(".mobile-billable_items_info_basic").slideDown();
			$(this).html("Click here to view more details ▼");
		}
	})

	$(".view_billable_items_button").click(function(){
		$("html, body").animate({
          scrollTop: $("#billable_items_header").offset().top
        }, 1000);
	})

	$(".mobile-terms_accept_trigger").click(function(){
		if ($(".mobile-terms_accept_details").css("display") == "none"){
			$(".mobile-terms_accept_details").slideDown();
			$(this).html("Terms & Conditions ▲");
			return;
		}
		else{
			$(".mobile-terms_accept_details").slideUp();
			$(this).html("Terms & Conditions ▼");
		}
	})

	$(".mobile-terms_decline_trigger").click(function(){
		if ($(".mobile-terms_decline_details").css("display") == "none"){
			$(".mobile-terms_decline_details").slideDown();
			$(this).html("Terms & Conditions ▲");
			return;
		}
		else{
			$(".mobile-terms_decline_details").slideUp();
			$(this).html("Terms & Conditions ▼");
		}
	})

	$('.mobile-detail-page').first().on('click','.mobile-attendee_list_trigger',function(){
		if ($(".mobile-attendee_list_details").css("display") == "none"){
			$(".mobile-attendee_list_details").slideDown();
			$(".mobile-attendee_list_trigger").parent().html('<strong>Attendees:</strong> <a href="javascript:void(0)" class="mobile-attendee_list_trigger" data-ajax="false">Close List ▲</a>');
			return;
		}
		else{
			$(".mobile-attendee_list_details").slideUp();
			$(".mobile-attendee_list_trigger").parent().html('<a href="javascript:void(0)" class="mobile-attendee_list_trigger" data-ajax="false">View Attendee List ▼</a>');
		}
	})

	$('.mobile-detail-page').first().on('click','.mobile-email_list_trigger',function(){
		if ($(".mobile-email_list_details").css("display") == "none"){
			$(".mobile-email_list_details").slideDown();
			$(".mobile-email_list_trigger").parent().html('<strong>Email Reminder:</strong> <a href="javascript:void(0)" class="mobile-email_list_trigger" data-ajax="false">Close List ▲</a>');
			return;
		}
		else{
			$(".mobile-email_list_details").slideUp();
			$(".mobile-email_list_trigger").parent().html('<a href="javascript:void(0)" class="mobile-email_list_trigger" data-ajax="false">View Email Reminder List ▼</a>');
		}
	})
	
	/* list pages: bulk update */
	
	$(".mobile-tasklist-block-check .ui-checkbox input").prop( "checked", false );
	$(".mobile-tasklist-block-check .ui-checkbox label").removeClass("ui-checkbox-on").addClass("ui-checkbox-off");
	$(".mobile-tasklist-block-check").removeClass("highlight");
	$(".mobile-tasklist-block-check .ui-checkbox label").removeClass("highlight");
	
	$(".bulkupdate_button").click(function(){
		if ($(".mobile-tasklist-block-check").css("display") == "none"){
			$(".mobile-tasklist-block-check").css("display","block");
			$(".mobile-tasklist-block-check-link").css("display","block");
			$(".mobile-tasklist-block-check-right").css("margin-left","35px");
			$(".mobile-tasklist-button-details, .mobile-tasklist-button-history, .mobile-tasklist-button-update, .mobile-tasklist-button-accept, .mobile-tasklist-button-decline, .mobile-tasklist-button-unassigned").css("display","none");
			$(".mobile-footer-buttons").slideDown();
			$(".mobile-footer").not($(".mobile-footer-buttons")).slideUp();
			$(".mobile-header .ui-navbar").slideUp();
			$(".mobile-content").css("margin-top","-45px");
		}
		else{
			$(".mobile-tasklist-block-check").css("display","none");
			$(".mobile-tasklist-block-check-link").css("display","none");
			$(".mobile-tasklist-block-check-right").css("margin-left","0px");
			$(".mobile-tasklist-button-details, .mobile-tasklist-button-history, .mobile-tasklist-button-update, .mobile-tasklist-button-accept, .mobile-tasklist-button-decline, .mobile-tasklist-button-unassigned").css("display","inline-block");
			setTimeout(function(){$(".bulkupdate_button").removeClass("ui-btn-active")},100);
			$(".mobile-tasklist-block-check .ui-checkbox input").prop( "checked", false );
			$(".mobile-tasklist-block-check .ui-checkbox label").removeClass("ui-checkbox-on").addClass("ui-checkbox-off");
			$(".mobile-tasklist-block-check").removeClass("highlight");
			$(".mobile-tasklist-block-check .ui-checkbox label").removeClass("highlight");
			$(".mobile-footer-buttons").slideUp();
			$(".mobile-footer").not($(".mobile-footer-buttons")).slideDown();
			$(".mobile-header .ui-navbar").slideDown();
			$(".mobile-content").css("margin-top","-1px");
		}
	});
	
	$(".mobile-tasklist-block-check-link").click(function(){
		if (!$(this).hasClass("mobile-tasklist-block-check-all-link")){
			if ($(this).parent().find(".mobile-tasklist-block-check .ui-checkbox label").hasClass("ui-checkbox-off")){
				$(this).parent().find(".mobile-tasklist-block-check .ui-checkbox input").prop( "checked", true );
				$(this).parent().find(".mobile-tasklist-block-check .ui-checkbox label").removeClass("ui-checkbox-off").addClass("ui-checkbox-on");
				$(this).parent().find(".mobile-tasklist-block-check").addClass("highlight");
				$(this).parent().find(".mobile-tasklist-block-check .ui-checkbox label").addClass("highlight");
			}
			else{
				$(this).parent().find(".mobile-tasklist-block-check .ui-checkbox input").prop( "checked", false );
				$(this).parent().find(".mobile-tasklist-block-check .ui-checkbox label").removeClass("ui-checkbox-on").addClass("ui-checkbox-off");
				$(this).parent().find(".mobile-tasklist-block-check").removeClass("highlight");
				$(this).parent().find(".mobile-tasklist-block-check .ui-checkbox label").removeClass("highlight");
			}
		}
	});
	
	$(".mobile-tasklist-block-check-all-link").click(function(){
		if ($(".mobile-tasklist-block-check-all .ui-checkbox label").hasClass("ui-checkbox-off")){
			$(".mobile-tasklist-block-check .ui-checkbox input").each(function(){
				$(this).prop( "checked", true );
			})
			$(".mobile-tasklist-block-check .ui-checkbox label").each(function(){
				$(this).removeClass("ui-checkbox-off").addClass("ui-checkbox-on");
			})
			$(".mobile-tasklist-block-check").each(function(){
				$(this).addClass("highlight");
			})
			$(".mobile-tasklist-block-check .ui-checkbox label").each(function(){
				$(this).addClass("highlight");
			})
		}
		else{
			$(".mobile-tasklist-block-check .ui-checkbox input").each(function(){
				$(this).prop( "checked", false );
			})
			$(".mobile-tasklist-block-check .ui-checkbox label").each(function(){
				$(this).removeClass("ui-checkbox-on").addClass("ui-checkbox-off");
			})
			$(".mobile-tasklist-block-check").each(function(){
				$(this).removeClass("highlight");
			})
			$(".mobile-tasklist-block-check .ui-checkbox label").each(function(){
				$(this).removeClass("highlight");
			})
		}
	});

	/* Add to Home Screen JS support */
	if(typeof(page_popup_bubble)=="undefined"){
		page_popup_bubble = "#BubbleAnchor";
	}

	google.bookmarkbubble.Bubble.prototype.NUMBER_OF_TIMES_TO_DISMISS=3;

	var bubble = new google.bookmarkbubble.Bubble();

	var parameter = page_popup_bubble;

	bubble.hasHashParameter = function() {
		return location.hash != "" && location.href.indexOf(parameter) == location.href.length - parameter.length;
	};

	bubble.setHashParameter = function() {
		if (!this.hasHashParameter()) {
			location.href = parameter;
		}
	};

	$('.homeIconShortcut').on('click',function(){
		//var key = google.bookmarkbubble.Bubble.prototype.LOCAL_STORAGE_PREFIX+google.bookmarkbubble.Bubble.prototype.DISMISSED_;
		//window.localStorage[key] = String(0);

		bubble.show_();
	});

	/* Sort Selection */
	$(".sortSR").on("click",function(e){
		var SortCol = $(this).data('sortcolumn'),
			SortDir = $(this).data('sortdirection'),
			OldURL = $(this).attr('href');
			NewURL = $(this).attr('href',OldURL+'&SortColumn='+SortCol+'&SortDirection='+SortDir);
	});
	
	/* forms */
	
	$(".mobile-time-input").each(function(){
		$(this).parent().addClass("mobile-time-input-div");
	});

	/* Prevent iOS from opening links in Safari rather than standalone web app */
	if (("standalone" in window.navigator) && window.navigator.standalone) {
		// For iOS Apps
		$('a').on('click', function(e){
			if($(this).attr('target') != '_blank'){
				e.preventDefault();
				var new_location = $(this).attr('href');
				if(new_location != undefined && new_location.substr(0, 1) != '#' && $(this).attr('data-method') == undefined){
					window.location = new_location;
				}
			}
		});
	}

	/* Get Unread Alert Count */
	/*$.get(
		'/core/components/remote/mobile-tc/alerts/alertnotifications.cfc?method=getUnreadCount',
		function(data){
			$('#alertCount').empty().text(data);
			if(data > 0){
				$('#alertCount').show();
			}else{
				$('#alertCount').hide();
			}
		},
		'json'
	)*/

	/*
		Global loading indicator
		This will attach the loading indicator to all anchor virtual click events - which should better support mobile environment than "click" would
		There are situations where we want to prevent this behavior by default and the easiest way is to add data-ajax="false" to an anchor you don't want to trigger this
		The loading indicator is also disabled for popup links (data-rel="popup") and the child anchors of jQuery Mobile's modified select/option UI
		This could be improved to check conditions more dynamically.
	 */
	$('a').on('vclick',function(e){
		if($(this).data('rel') != 'popup' && $(this).data('ajax') != false){
			if($(this).parent('li').length == 0 || $(this).parent('li').attr('role') != 'option'){
				showLoading();
			}
		}
	});



	$('form.validateForm').on('submit',function(e){
		// Param result
		var Result = true;

		// Loop through all required fields that are children of the form
		// This could be improved tremendously. We should probably verify that the element with the required class is actually an input/select/textarea
		// Can add different forms of validation inside, as well, using Regex to check email address patterns (as closely as we can) or phone numbers, etc...
		$(this).find('input.requiredField:visible').each(function(){
			// Check length
			if( $(this).attr('type') == 'checkbox' && !$(this).is(":checked") ) {
				// Prevent form submission
				Result = false;
				feedback_message('tc_requiredField');
			}
			else if($(this).val().length == 0){
				// Prevent form submission
				Result = false;

				// Add visual indication of fields missing
				$(this).addClass('failedValidation');

				// Show message via tooltip
				if($(this).data('tooltip')){
					feedback_message($(this).data('tooltip'));
				}else{
					feedback_message('tc_requiredField');
				}
			}
		});

		$(this).find('select.requiredField:visible').each(function(){
			// Check if selected
			if(!$(this).find('option:selected')){
				// Prevent form submission
				Result = false;

				// Add visual indication of fields missing
				$(this).addClass('failedValidation');

				// Show message via tooltip
				if($(this).data('tooltip')){
					feedback_message($(this).data('tooltip'));
				}else{
					feedback_message('mtm_requiredField');
				}
			}else{
				if(!$(this).find('option:selected').val() || $(this).find('option:selected').val().length == 0){
					// Prevent form submission
					Result = false;

					// Add visual indication of fields missing
					$(this).addClass('failedValidation');
					$(this).siblings('a').children('span.requiredField').addClass('failedValidation');

					// Show message via tooltip
					if($(this).data('tooltip')){
						feedback_message($(this).data('tooltip'));
					}else{
						feedback_message('mtm_requiredField');
					}
				}
			}
		});

		// Validate email address
		$(this).find('input[type="email"]:visible').each(function(){
			var $field = $(this);

			var fieldData = $field.data();

			if($.trim($field.val()) != $field.val()){
				$field.val($.trim($field.val()));
			}

			if($field.val().length > 0){

				var emailRegex = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

				if(!emailRegex.test($field.val()) && $field.val().length > 0){
					// Prevent form submission
					Result = false;

					// Add visual indication of fields missing
					$(this).addClass('failedValidation');

					// Show message via tooltip
					if($(this).data('tooltip')){
						feedback_message($(this).data('tooltip'));
					}else{
						feedback_message('mtm_invalidEmail');
					}
				}
			}
		});

		// Validate phone numbers
		$(this).find('input[type="tel"]:visible').each(function(){
			var $field = $(this);

			var fieldData = $field.data();

			if($field.val().length > 0 && !$field.hasClass("dontvalidate")){
				
				var numericOnly = $field.val().replace(/[^\d\+]+/g, '');

				var NorthAmericanPhoneRegex = /^1?[2-9][\d]{9}$/;
				var InternationalPhoneRegex = /^\+[\d]{7,15}$/;

				if(!NorthAmericanPhoneRegex.test(numericOnly) && !InternationalPhoneRegex.test(numericOnly) && $field.val().length > 0){
					// Prevent form submission
					Result = false;

					// Add visual indication of fields missing
					$(this).addClass('failedValidation');

					// Show message via tooltip
					if($(this).data('tooltip')){
						feedback_message($(this).data('tooltip'));
					}else{
						feedback_message('mtm_invalidPhone');
					}
				}
			}
		});

		$(this).find('input#NewPassword').each(function(){
			if($(this).val().length > 0){
				var confirmPassword = $(document).find('input#confirmPassword');
				if(confirmPassword.length > 0){
					var PasswordVal = $(this).val();
					var ConfirmVal = confirmPassword.val();

					if(PasswordVal != ConfirmVal){
						// Prevent form submission
						Result = false;

						// Add visual indication of fields missing
						$(this).addClass('failedValidation');
						confirmPassword.addClass('failedValidation');
						// Show message via tooltip
						if($(this).data('tooltip')){
							feedback_message($(this).data('tooltip'));
						}else{
							feedback_message('mtm_invalidConfirmPassword');
						}
					}
				}
			}
		});

		$('input.failedValidation').off().on('keyup',function(e){
			$(this).removeClass('failedValidation');
		});

		$('select.failedValidation').on('change',function(e){
			$(this).removeClass('failedValidation');
			$(this).siblings('a').children('span.requiredField').removeClass('failedValidation');
		});


		// Take measures to avoid form submission cross-browser
		if(!Result){
			hideLoading();
			//return false;
			e.preventDefault();
		}
	});
	if ($("#alertCount").css("display") != "none"){
		if($("#home-header").width() < 190){
			$("#home-header").html("MTM");
		}
	}
	else{
		if($("#home-header").width() < 170){
			$("#home-header").html("MTM");
		}
	}

	/* Add Enter/Go (iOS keyboard) support | For additional forms add form element to selector */
	$("form").on("keypress", "input", function(e) {
		//check for enter key
		if(e.which === 13) {
			$(this).closest('form').submit();
		}
	});

	/* TC CRM add/edit page elements */

	$("#same_as_above").change(function(){
		if ($(this).is(":checked")){
			$("#conference_name").val($("#name").val());
			$("#conference_email").val($("#email").val());
			$("#conference_phone").val($("#phone").val());
			$("#conference_alt_phone").val($("#alt_phone").val());
			$("#conference_name").prop( "disabled",true);
			$("#conference_email").prop( "disabled",true);
			$("#conference_phone").prop( "disabled",true);
			$("#conference_alt_phone").prop( "disabled",true);
		}
		else{
			$("#conference_name").prop( "disabled",false);
			$("#conference_email").prop( "disabled",false);
			$("#conference_phone").prop( "disabled",false);
			$("#conference_alt_phone").prop( "disabled",false);
		}
	})

	$(".mobile-catering_info_trigger").change(function(){
		if ($(this).is(":checked")){
			$(this).closest(".ui-field-contain").nextAll(".mobile-catering_info_details").first().slideDown();
		}
		else{
			$(this).closest(".ui-field-contain").nextAll(".mobile-catering_info_details").first().slideUp();
		}
	})

	$(".mobile-room_info_trigger").click(function(){
		if ($(this).hasClass("mobile-room_info_trigger_expanded")){
			$(this).parent().closest(".ui-field-contain").nextAll(".mobile-room_info_details").first().slideUp();
			$(this).removeClass("mobile-room_info_trigger_expanded");
			return;
		}
		else{
			$(this).parent().closest(".ui-field-contain").nextAll(".mobile-room_info_details").first().slideDown();
			$(this).addClass("mobile-room_info_trigger_expanded");
		}
	})

	$(".mobile-catering_info_sameasabove").change(function(){
		if ($(this).is(":checked")){
			$(this).closest(".ui-field-contain").nextAll(".mobile-catering_info_details").first().slideDown();
			$(this).closest(".ui-field-contain").prev(".ui-field-contain").find("input").prop("checked",true);
			$(this).closest(".ui-field-contain").prev(".ui-field-contain").find("label").removeClass("ui-checkbox-off").addClass("ui-checkbox-on");
			$(this).closest(".ui-field-contain").nextAll(".mobile-catering_info_details").first().find("input").each(function(i){
				$(this).prop("disabled",true);
				$(this).val($(this).closest(".mobile-catering_info_details").prevAll(".mobile-catering_info_details").first().find("input").eq(i).val());
			});
			$(this).closest(".ui-field-contain").nextAll(".mobile-catering_info_details").first().find("textarea").each(function(i){
				$(this).prop("disabled",true);
				$(this).val($(this).closest(".mobile-catering_info_details").prevAll(".mobile-catering_info_details").first().find("textarea").eq(i).val());
			});
		}
		else{
			$(this).closest(".ui-field-contain").nextAll(".mobile-catering_info_details").first().find("input").each(function(){
				$(this).prop("disabled",false);
			});
			$(this).closest(".ui-field-contain").nextAll(".mobile-catering_info_details").first().find("textarea").each(function(){
				$(this).prop("disabled",false);
			});
		}
	})

	var number_of_attachments = $(".mobile-attachment_info").length + 1;
	var attachblockhtml = '<div class="mobile-add_attachment_inputblock">'+$(".mobile-add_attachment_inputblock").html()+'</div>';
	$(".mobile-add_attachment_block_plus").click(function(){
		number_of_attachments = number_of_attachments + 1;
		if (number_of_attachments < 6){
			$(".mobile-add_attachment_inputblock").last().after(attachblockhtml);
		}
		if (number_of_attachments == 5){
			$(this).parent().css("display","none");
		}
	})

	/* end TC CRM add/edit page elements */
});

$(window).resize(function(){
	if ($("#alertCount").css("display") != "none"){
		if($("#home-header").width() < 190){
			$("#home-header").html("MTM");
		}
		else{
			$("#home-header").html("Mobile Task Management");
		}
	}
	else{
		if($("#home-header").width() < 170){
			$("#home-header").html("MTM");
		}
		else{
			$("#home-header").html("Mobile Task Management");
		}
	}
});

/* fix for jquery mobile bug - footer hiding on select change on safari 7 */
$(window).load(function(){
	$("select").change(function () {
		setTimeout(function(){$(".mobile-footer").css("position","absolute")},80);
		setTimeout(function(){$(".mobile-footer").css("position","fixed")},100);
    }).change();
})

/* fix for jquery mobile bug - footer jumping around on input blur event on ipad 
$(document).on('blur', 'input:not(:submit), select, textarea', function () {
    var paddingBottom = parseFloat($(".ui-mobile-viewport, .ui-page-active").css("padding-bottom"));
    $(".ui-mobile-viewport, .ui-page-active").css("padding-bottom", (paddingBottom + 1) + "px");
    window.setTimeout(function () {
        $(".ui-mobile-viewport, .ui-page-active").css("padding-bottom", paddingBottom + "px");
    }, 0);
});*/

/* fix for jquery mobile bug - footer jumping around on input blur event on ipad
var is_keyboard = false;
$(document).ready(function(){
	updateViewsinit();
});

function updateViewsinit(){
	var initial_screen_size = window.innerHeight;

	window.addEventListener("resize", function() {
	    is_keyboard = (window.innerHeight < initial_screen_size);
	    updateViews()
	    var checkupdate = setInterval(function(){updateViews()},500);
	}, false);

	$("input").bind("focus blur",function() {
	    $(window).scrollTop(10);
	    is_keyboard = $(window).scrollTop() > 0;
	    $(window).scrollTop(0);
	    updateViews()
	    var checkupdate = setInterval(function(){updateViews()},500);
	});
}

function updateViews() {
    if (is_keyboard) {
        $(".mobile-footer").hide();
    }
    else {
        $(".mobile-footer").show();
        clearInterval(checkupdate);
    }
}*/

/* fix for jquery mobile bug - footer jumping around on input blur event on ipad
$(document).on('focus', 'input:not(:submit), textarea', function () {
	$(".mobile-footer").addClass("footer-fix");
	var scrollBottom = $(window).scrollTop() + $(window).height();
    $(".mobile-footer").css("top",(scrollBottom-53)+"px");
});
$(document).ready(function(){
	$(window).scroll(function() {
		$(".mobile-footer").addClass("footer-fix");
		var scrollBottom = $(window).scrollTop() + $(window).height();
		$(".mobile-footer").css("top",(scrollBottom-53)+"px");
	});
});*/

$(document).ready(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		$("input").bind("focus blur",function() {
 			$(".mobile-footer-buttons").addClass("footer-fix");
 		})
	}
})

page_popup_bubble = "#BubbleAnchor";