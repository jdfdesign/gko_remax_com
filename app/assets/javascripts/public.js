//= gko_public_all
//= require gko/externals/jquery.elastidegallery
	
$(document).ready(function() {
	if($('.images:first').length > 0) {
		Gallery.init($('.images:first'));
	}
  
	$("div.custom.dropdown").each(function () {
    $(this).css('width', '260px').find('ul').css('width', '260px');
  });
	
	$('#featured').orbit({ 
		bullets : true, 
		animation : "horizontal-push",
		animationSpeed: 800,
		timer: true,
		fluid: false });
});