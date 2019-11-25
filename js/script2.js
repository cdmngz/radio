const audio = document.getElementById("audio")

const programas = [	
	["Poder<br>Jóven<br>Radio", "#459", "PJR.mp3"],
	["Traba<br>lenguas<br>Primaria", "#956", "TB1.mp3"],
	["Caja Mágica!!", "#118", "CJM.mp3"],
	["Entrevista<br>Fabry", "#546", "EFabry.mp3"],
	["Traba<br>lenguas<br>Secundaria", "brown", "TB2.mp3"],
	["Caja Misteriosa &#191;&#63;", "#191", "CJM1.mp3"]
]

for (i = 0; i < programas.length; ++i) {
	let nombre = programas[i][0];	
	document.body.innerHTML += `<div onclick="changeColorAndSong(${i})"><span>${nombre}</span></div>`
}

document.onkeypress = e => (e.keyCode === '32' && audio.paused)
	? (console.log("1",e.keyCode), audio.play())
	: (console.log("2",e.keyCode), audio.pause())

let source2 = document.getElementById('audioSource')

let changeColorAndSong = i => (
	document.body.style.backgroundColor = programas[i][1]
,	document.getElementsByTagName("div")[i].style.backgroundColor = getRandomColor()		
,	audio.pause()
,	song_path = "audio/"+programas[i][2]
,	console.log(song_path)
,	source2.src = song_path
,	audio.load()
,	audio.play()
,	source2.play()
)

const letters = '0123456789ABCDEF';
function getRandomColor() {
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 12)];
	}
	return color;
}