// Search for known iOS device names - this is used to set <select> menus selection style
if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
	iOS = true;
}else{
	iOS = false;
}
$(document).on( "mobileinit", function() {
	$.mobile.selectmenu.prototype.options.nativeMenu = iOS;
});