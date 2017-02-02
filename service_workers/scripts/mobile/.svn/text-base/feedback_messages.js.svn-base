var mcolor;

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
	var Result = '';
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            Result = sParameterName[1];
        }
        /*else{
        	return "";
        }*/
    }
	return Result;
}

$(document).ready(function(){

	if (getUrlParameter("m").length){
		feedback_message(getUrlParameter("m"));
	}
	
})

function feedback_message(message_id, stillTime){
	if(!stillTime){
		var stillTime = 3000;
	}

	var slideTime = (stillTime/3)*2;
	var fadeTime = stillTime/4;

	$.ajax({
	   	url: "/core/components/remote/common/tooltips.cfc", 
	   	dataType: "json",
	   	data: {'method':'getTooltip','tooltipName':message_id}, 
	   	success: function (respJSON) {
			var RandID = Math.floor((Math.random() * 100) + 1);
	     	var content = '<div id="'+message_id+'">'+respJSON.CONTENT+'</div>';
	     	var tiptype = respJSON.TIPTYPE;

			if($('#feedbackMessage').find('div').length == 0){
				$('#feedbackMessage').css("display", "block");
				$('#feedbackMessage').css("opacity", "1.0");
			}
			if($('#feedbackMessage').find('div#'+message_id).length == 0){
				if(tiptype == 'Success'){
					$('#feedbackMessage').append(content);
					$('#feedbackMessage').addClass('success_message');
					mcolor = "#309730";
					$('#feedbackMessage').css("background-color", mcolor);
					mcolor = "#198c19";
					var mfade1 = setInterval(function(){
						$('#feedbackMessage').css("background-color", mcolor);
						if(mcolor == "#309730"){
							mcolor = "#198c19";
							return;
						}
						if(mcolor == "#198c19"){
							mcolor = "#309730";
						}
					}, 500);
					setTimeout(function(){
						clearInterval(mfade1)
					}, fadeTime);
				}
				if(tiptype == 'Error'){
					$('#feedbackMessage').append(content);
					$('#feedbackMessage').addClass('failure_message');
					var mcolor = "#b83939";
					$('#feedbackMessage').css("background-color", mcolor);
					mcolor = "#b02424";
					var mfade1 = setInterval(function(){
						$('#feedbackMessage').css("background-color", mcolor);
						if(mcolor == "#b02424"){
							mcolor = "#b83939";
							return;
						}
						if(mcolor == "#b83939"){
							mcolor = "#b02424";
						}
					}, 500);
					setTimeout(function(){
						clearInterval(mfade1)
					}, fadeTime);
				}

				setTimeout(function(){
					$('#' + message_id).slideDown();
				}, slideTime);
				setTimeout(function(){
					// Remove this message
					$('#' + message_id).remove();

					// Clear feedback section if no messages displayed
					if($('#feedbackMessage').find('div').length == 0){
						$('#feedbackMessage').css("opacity", "0");
						$('#feedbackMessage').css("display", "none");
						hideLoading();
					}
				}, stillTime);
			}
	   }
	});
	
	
}