//= require jquery.js
//= require jquery_ujs
//= require gko/externals/innershiv
//= require gko/externals/jquery.easing.1.3
//= require gko/externals/jquery.imagesloaded
//= require gko/externals/jquery.elastislide
//= require gko/externals/jquery.elastidegallery
//= require gko/externals/foundation/jquery.orbit-1.3.0.js
	
$(document).ready(function() {
	if($('.images:first').length > 0) {
		Gallery.init($('.images:first'));
	}

	$('#featured').orbit({ 
		bullets : true, 
		animation : "horizontal-push",
		animationSpeed: 800,
		timer: true,
		fluid: false });
});