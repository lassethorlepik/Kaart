function videotap() {
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
if ("ontouchstart" in document.documentElement) {$(document).on('click touchstart', videotap());}

function fullscreen() {
document.documentElement.requestFullscreen().catch((e) => {
      console.log(e);
   });
}

