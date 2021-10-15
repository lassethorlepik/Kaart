function videotap() {
	fullscreen();
	var myVideo = document.getElementById("video");
	if (myVideo.paused) {
		myVideo.play();
	}
	else  {
		myVideo.pause(); 
	}
}
$(document).on('tap click', function(){videotap()});

function fullscreen() {
document.documentElement.requestFullscreen().catch((e) => {
      console.log(e);
   });
}

