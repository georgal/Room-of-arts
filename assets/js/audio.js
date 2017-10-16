
	$('#play').click(function() {
		sound.play();
	});
	
	$('#pause').click(function() {
		sound.pause();
	});
		
  $('#mute').click(function() {
    $("i", this).toggleClass("fa fa-volume-off fa-2x fa fa-volume-up fa-2x");
});