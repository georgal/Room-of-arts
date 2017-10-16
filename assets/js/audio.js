var audio = document.getElementById('bgaudio');
	document.getElementById('mute').addEventListener('click', function (e)
		{
			e = e || window.event;
			audio.muted = !audio.muted;
			e.preventDefault();
		}, false);
							
var audio = document.getElementById('bgaudio');
	document.getElementById('restart').addEventListener('click', function (e)
		{
			e = e || window.event;
			audio.currentTime = 0
			e.preventDefault();
		});	