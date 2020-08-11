var imgcanvas = document.getElementById("can1");
var imageMain = null;
var imageGrey = null;
var imageRGB = null;
var imageRed = null;
var imageRainbow = null;
var imageBlur = null;

function upload() {
	var fileInput = document.getElementById("finput");
    imageMain = new SimpleImage(fileInput);
    imageMain.drawTo(imgcanvas);

	imageGrey = new SimpleImage(fileInput);
	imageRGB = new SimpleImage(fileInput);
	imageRed = new SimpleImage(fileInput);
	imageRainbow = new SimpleImage(fileInput);
	imageBlur = new SimpleImage(fileInput);
}

function makeGrey() {
	for (var pixel of imageGrey.values()) {
		var originalPixel = imageMain.getPixel(pixel.getX(), pixel.getY());
		imageGrey.setPixel(pixel.getX(), pixel.getY(), originalPixel);
	}
	for (var pixel of imageGrey.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	imageGrey.drawTo(imgcanvas);
}

function makeRGB() {
	for (var pixel of imageRGB.values()) {
		var originalPixel = imageMain.getPixel(pixel.getX(), pixel.getY());
		imageRGB.setPixel(pixel.getX(), pixel.getY(), originalPixel);
	}
	var width = imageRGB.getWidth();
	for (var pixel of imageRGB.values()) {
		if (pixel.getX() < (1 / 3) * width) {
			pixel.setRed(255);
		} else if (pixel.getX() > (2 / 3) * width) {
			pixel.setBlue(255);
		} else {
			pixel.setGreen(255);
		}
	}
	imageRGB.drawTo(imgcanvas);
}

function makeRainbow() {
	for (var pixel of imageRainbow.values()) {
		var originalPixel = imageMain.getPixel(pixel.getX(), pixel.getY());
		imageRainbow.setPixel(pixel.getX(), pixel.getY(), originalPixel);
	}
	var width = imageRainbow.getWidth();
	for (var pixel of imageRainbow.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		if (pixel.getX() <= (1 / 7) * width) {
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(0);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(avg * 2 - 255);
				pixel.setBlue(avg * 2 - 255);
			}
		} else if (
			pixel.getX() > (1 / 7) * width &&
			pixel.getX() <= (2 / 7) * width
		) {
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(0.8 * avg);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(1.2 * avg - 51);
				pixel.setBlue(avg * 2 - 255);
			}
		} else if (
			pixel.getX() > (2 / 7) * width &&
			pixel.getX() <= (3 / 7) * width
		) {
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(2 * avg);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(255);
				pixel.setBlue(avg * 2 - 255);
			}
		} else if (
			pixel.getX() > (3 / 7) * width &&
			pixel.getX() <= (4 / 7) * width
		) {
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(2 * avg);
				pixel.setBlue(0);
			} else {
				pixel.setRed(avg * 2 - 255);
				pixel.setGreen(255);
				pixel.setBlue(avg * 2 - 255);
			}
		} else if (
			pixel.getX() > (4 / 7) * width &&
			pixel.getX() <= (5 / 7) * width
		) {
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(0);
				pixel.setBlue(2 * avg);
			} else {
				pixel.setRed(avg * 2 - 255);
				pixel.setGreen(avg * 2 - 255);
				pixel.setBlue(255);
			}
		} else if (
			pixel.getX() > (5 / 7) * width &&
			pixel.getX() <= (6 / 7) * width
		) {
			if (avg < 128) {
				pixel.setRed(0.8 * avg);
				pixel.setGreen(0);
				pixel.setBlue(2 * avg);
			} else {
				pixel.setRed(1.2 * avg - 51);
				pixel.setGreen(avg * 2 - 255);
				pixel.setBlue(255);
			}
		} else {
			if (avg < 128) {
				pixel.setRed(1.6 * avg);
				pixel.setGreen(0);
				pixel.setBlue(1.6 * avg);
			} else {
				pixel.setRed(0.4 * avg + 153);
				pixel.setGreen(avg * 2 - 255);
				pixel.setBlue(0.4 * avg + 153);
			}
		}
	}
	imageRainbow.drawTo(imgcanvas);
}

function makeRed() {
	for (var pixel of imageRed.values()) {
		var originalPixel = imageMain.getPixel(pixel.getX(), pixel.getY());
		imageRed.setPixel(pixel.getX(), pixel.getY(), originalPixel);
	}
	for (var pixel of imageRed.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		if (avg < 128) {
			pixel.setRed(avg * 2);
			pixel.setGreen(0);
			pixel.setBlue(0);
		} else {
			pixel.setRed(255);
			pixel.setGreen(avg * 2 - 255);
			pixel.setBlue(avg * 2 - 255);
		}
	}
	imageRed.drawTo(imgcanvas);
}

function makeBlur() {
	var randomx;
	var randomy;
	for (var pixel of imageBlur.values()) {
		if (Math.random() > 0.5) {
			var originalPixel = imageMain.getPixel(pixel.getX(), pixel.getY());
			imageBlur.setPixel(pixel.getX(), pixel.getY(), originalPixel);
		} else {
			randomx = Math.floor(Math.random() * 10 + 1); //... random pixels between 1 and 10 ...//
			if (pixel.getX() + randomx >= imageMain.getWidth()) {
				randomx = -1;
			}
			randomy = Math.floor(Math.random() * 10 + 1); //... random pixels between 1 and 10 ...//
			if (pixel.getY() + randomy >= imageMain.getHeight()) {
				randomy = -1;
			}

			var originalPixel = imageMain.getPixel(
				pixel.getX() + randomx,
				pixel.getY() + randomy
			);
			imageBlur.setPixel(pixel.getX(), pixel.getY(), originalPixel);
		}
	}

	imageBlur.drawTo(imgcanvas);
}

function resetImage() {
	var ctx = imgcanvas.getContext("2d");
	ctx.clearRect(0, 0, imgcanvas.width, imgcanvas.height);
	imageMain.drawTo(imgcanvas);
}
