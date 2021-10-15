function tap() {
	console.log("tap");
	fullscreen();
	var myVideo = document.getElementById("video");
	if (myVideo.paused) {
		myVideo.play();
	}
	else  {
		myVideo.pause(); 
	}
}
$(document).on('click touchstart', tap());

function fullscreen() {
document.documentElement.requestFullscreen().catch((e) => {
      console.log(e);
   });
}

