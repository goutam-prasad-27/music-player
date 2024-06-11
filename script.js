let progress = document.getElementById("progress");
let song = document.getElementById("song");
let iconCtrl = document.getElementById("iconCtrl");

song.onloadedmetadata = () => {
	progress.max = song.duration;
	progress.value = song.currentTime;
};

const playPause = () => {
	if (iconCtrl.classList.contains("fa-pause")) {
		song.pause();
		iconCtrl.classList.remove("fa-pause");
		iconCtrl.classList.add("fa-play");
	} else {
		song.play();
		iconCtrl.classList.add("fa-pause");
		iconCtrl.classList.remove("fa-play");
	}
}

//* PROGRESS BAR 
if (song.play()) {
	setInterval(() => {
		progress.value = song.currentTime;
	}, 100);
}
progress.onchange = () => {
	song.play();
	song.currentTime = progress.value;
	iconCtrl.classList.add("fa-pause");
	iconCtrl.classList.remove("fa-play");
};
