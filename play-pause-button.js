function play() {
	var audio = document.getElementById('audio');
	if (audio.paused) {
		audio.play();
		$('#play').removeClass('play');
        $('#play').addClass('pause');
        document.getElementById('play-input').value = '❚❚';
	} else {
		audio.pause();
		// audio.currentTime = 0
		$('#play').addClass('play');
        $('#play').removeClass('pause');
        document.getElementById('play-input').value = '►';
	}
}
