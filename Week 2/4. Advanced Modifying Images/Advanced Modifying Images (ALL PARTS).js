//////////////////////////...Advanced Modifying Images.../////////////////////

//////////////////////////////// ... Part 1 ... /////////////////////////////
var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("Dinos.png");

//... output image with same size as foreground image ...//
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

for (var pixel of fgImage.values()) 
{
    if (pixel.getGreen() > pixel.getBlue() + pixel.getRed()) 
    {
		//...pixel is green
		var x = pixel.getX();
		var y = pixel.getY();
		var bgPixel = bgImage.getPixel(x, y);
		output.setPixel(x, y, bgPixel); // output's pixel is now set to bgPixel
    }
    else
    {
		output.setPixel(pixel.getX(), pixel.getY(), pixel);
	}
}
print("Green: ", output);
///////////////////////////////////////////////////////////////////

//////////////////////////////// ... Part 2 ... /////////////////////////////
var img = new SimpleImage(200, 200);
for (var px of img.values()) 
{
	var x = px.getX();
	var y = px.getY();
    if (x < img.getWidth() / 2 && y < img.getHeight() / 2) 
    {
		px.setRed(255);
	}

    if (y > img.getHeight() / 2 && x > img.getWidth() / 2) 
    {
		px.setBlue(255);
    } 

    else if (x > img.getWidth() / 2) 
    {
		px.setGreen(255);
    } 

    else if (x < img.getWidth() / 2 && y > img.getHeight() / 2) 
    {
		px.setRed(255);
		px.setBlue(255);
	}
}
print(img);
///////////////////////////////////////////////////////////////////////////////

////////////////////////////... Part 3 ...////////////////////////////////////////
function setBlack(pixel)
{
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
    return pixel;
}

function addBorder(image, thickness)
{
    var width = image.getWidth();
    var height = image.getHeight();
    for (var pixel of image.values())
    {
        var x = pixel.getX();
        var y = pixel.getY();
        if(x<thickness || y<thickness || (x>thickness && x>=width-thickness) || (y>thickness && y>=height-thickness))
        {
            image.setPixel(x,y,setBlack(pixel));
        }
    }
}

var image = new SimpleImage("smallpanda.png");
var thickness = 10;
addBorder(image, thickness);
print(image);
/////////////////////////////////////////////////////////////////////////
