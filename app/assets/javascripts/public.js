//= require gko/jquery.elastidegallery 

$(document).ready(function() {
	if($('.images:first').length > 0) {
		Gallery.init($('.images:first'));
	}
  
	$("div.custom.dropdown").each(function () {
    $(this).css('width', '260px').find('ul').css('width', '260px');
  });


	$('select#rental_property_id').change(function(){
	    var result = $(this).val()
		document.location.href = result;
	});
});