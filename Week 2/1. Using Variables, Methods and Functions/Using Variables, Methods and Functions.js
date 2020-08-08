////...Experimenting with Variables and Creating a SimpleImage...////
var x = 3;
var y = 4;
var z = x + 2*y;
print("z: ", x);
print("y: ", y);
print("z: ", z);
///////////////////////////////////////////////////////////////////
var x = 3;
var y = 2;
y = x;
print ("x:", x);
print ("y: ", y);
///////////////////////////////////////////////////////////////////
var image = new SimpleImage("chapel.png");
print(image);
///////////////////////////////////////////////////////////////////
var image = new SimpleImage("drewRobert.png");
var w = image.getWidth();
var h = image.getHeight();
var pix = image.getPixel(0,0);
var red = image.getRed(0,0);
var green = image.getGreen(0,0);
var blue = image.getBlue(0,0);
print("width: ", w);
print("heigth: ", h);
print("Pixel: ", pix);
print("Red: ", red);
print("Green: ", green);
print("Blue: ", blue);
///////////////////////////////////////////////////////////////////

////////...Experimenting With Functions...////////
function square(x)
{
	var ans = x*x;
	return ans;
}
var y = square(4);
print("Square: ", y)
///////////////////////////////////////////////////////////////////
function cube(x)
{
	var ans = x*x*x;
	return ans;
}
var y = cube(4);
print("Cube: ", y)
///////////////////////////////////////////////////////////////////
function ADD(x,y,z)
{
	var ans = x+y+z;
	return ans;
}
var y = ADD(1,2,3);
print("Addition: ", y)
///////////////////////////////////////////////////////////////////
function addStrings(x,y)
{
	var ans = x+y;
	return ans;
}
var y = addStrings("Dino Dino ", "Bambino");
print("String Concat: ", y);
///////////////////////////////////////////////////////////////////