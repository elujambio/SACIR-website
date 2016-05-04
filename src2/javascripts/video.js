// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
	function onYouTubeIframeAPIReady() {
		video = new YT.Player('video', {
			height: '390',
			width: '640',
			videoId: 'M8vng61fGEE',
			modestbranding: 1, 
			events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
			}
		});
		video2 = new YT.Player('tutorial', {
			height: '390',
			width: '640',
			videoId: 'RfJgT89hEME',
			modestbranding: 1, 
			events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
			}
		});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	// event.target.playVideo();
	// event.target.stopVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 6000);
		done = true;
	}
}
// function stoVideo() {
// 	player.stopVideo();
// }
// function startVideo() {
// 	player.playVideo();
// }

$("#view-video").click(
	function () {
		// player.playVideo();
		$("[data-section=1] .text-container")
			.velocity({ opacity: 0 },{ duration: 300 });
		$("#video-overlay")
			.velocity({ opacity: 0 },{ duration: 300 });

		$("[data-section=1] .text-container")
			.css("pointer-events", "none");
		$("#video-overlay")
			.css("pointer-events", "none");
		$("#video")
			.css("pointer-events", "all");

		// video.playVideo();
	}
);

$(".video-overlay").click(
	function () {
		// player2.playVideo();
		// $("[data-section=1] .text-container")
		// 	.velocity({ opacity: 0 },{ duration: 300 });
		$(".video-overlay")
			.velocity({ opacity: 0 },{ duration: 300 });

		// $("[data-section=1] .text-container")
			// .css("pointer-events", "none");
		$(".video-overlay")
			.css("pointer-events", "none");
		$("tutorial")
			.css("pointer-events", "all");

		// video2.playVideo();
	}
);
