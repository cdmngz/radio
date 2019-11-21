let audio = document.getElementById("audio")

console.log(audio.src)

let cambiar = () => audio.src = "audio/TB1.mp3"

document.onkeypress = e => e.keyCode === 13 ? (cambiar(), console.log("cambia")) : console.error(err)

/*
$(function() {

	var audio = $('audio')[0];

	$('audio').attr("src", 'audio/intro.mp3');
	audio.play();

	var programas = [	
		["0", "Poder<br>Jóven<br>Radio", "#459", "PJR.mp3"],
		["1", "Traba<br>lenguas<br>Primaria", "#956", "TB1.mp3"],
		["2", "Caja Mágica!!", "#118", "CJM.mp3"],
		["3", "Entrevista<br>Fabry", "#546", "EFabry.mp3"],
		["4", "Traba<br>lenguas<br>Secundaria", "brown", "TB2.mp3"],
		["5", "Caja Misteriosa &#191;&#63;", "#191", "CJM1.mp3"]
	];

	for (i = 0; i < programas.length; ++i) {

		var id = programas[i][0];
		var nombre = programas[i][1];

		$("body").append('<div id="'+id+'"><span style="grid-column: 2; grid-row: 2;">'+nombre+'</span></div>');
	}

	$('body').keyup(function(e) {
		if(e.keyCode == 32){
			if(audio.paused) audio.play(); else audio.pause();
		}
	});

	$("div").click(function() {

		var id = $(this).attr('id');
		var sty = programas[id][2];
		var song = programas[id][3];

		$('body').css("background-color", sty);
		$('div').css("background-color", sty);

		$('audio').attr("src", 'audio/'+song);
		audio.play();

	});
});
*/