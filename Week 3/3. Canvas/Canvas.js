/////////////////////////////////////////////////////////////////////////////////////////
function changeColor() {
	var dd1 = document.getElementById("d1");
	var dd2 = document.getElementById("d2");
	dd1.className = "blueback";
	dd2.className = "orangeback";
}
/////////////////////////////////////////////////////////////////////////////////////////
function doRed() {
	var dd1 = document.getElementById("d1");
	dd1.style.backgroundColor = "red";
}
function doBlue() {
	var dd2 = document.getElementById("d2");
	dd2.style.backgroundColor = "blue";
}
/////////////////////////////////////////////////////////////////////////////////////////
function addShapesTextCanvas() {
	var dd1 = document.getElementById("d1");
	dd1.style.backgroundColor = "blue";

	var ctx = dd1.getContext("2d");
	ctx.fillStyle = "yellow";
	ctx.fillRect(10,10,60,60);
	ctx.fillRect(100,10,60,60);

	ctx.fillStyle = "black";
	ctx.font = "30px Ubuntu";
	ctx.fillText("Oi", 15, 45);
}

function clearCanvasPaintRed() {
	var dd1 = document.getElementById("d1");
	var ctx = dd1.getContext("2d");
	ctx.clearRect(0,0,dd1.width, dd1.height);
	dd1.style.backgroundColor = "red";	
}
/////////////////////////////////////////////////////////////////////////////////////////