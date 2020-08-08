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