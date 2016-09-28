$(document).ready(function() {
	$(".main").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		playHadouken ();
		//play hadouken sound
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(".hadouken").hide();
				$(".hadouken").css('left', '520px');
			}
		);
	})
	.mouseup(function() {
		//ryu goes back to ready position
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});
	playBgMusic();
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.4;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playBgMusic () {
  $('#bg-music')[0].volume = 0.1;
  $('#bg-music')[0].load();
  $('#bg-music')[0].play();
}