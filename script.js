(function(){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#000";
	ctx.fillRect(0,0,500,500);

	ctx.translate(250,200);

	var t = 0;

	function draw(){
		ctx.lineTo(100*Math.sin(t/3), 100*Math.sin(t/4));
		ctx.strokeStyle = '#0f0'
		ctx.stroke();
		t++;
		setTimeout(draw, 1);
	}

	draw();


})();