function changeBackToBlue() {
	var canvas = document.getElementById("d1");
	canvas.style.backgroundColor = "blue";
}

function doColor() {
	var dd1 = document.getElementById("d1");
	var colorInput = document.getElementById("clr");
	var color = colorInput.value;
	dd1.style.backgroundColor = color;
}

function doSqr() {
	var dd1 = document.getElementById("d1");
	var sizeInput = document.getElementById("sldr");
	var size = sizeInput.value;
	var ctx = dd1.getContext("2d");
	ctx.clearRect(0, 0, dd1.width, dd1.height);
	ctx.fillStyle = "yellow";
	ctx.fillRect(10, 10, size, size);
}
