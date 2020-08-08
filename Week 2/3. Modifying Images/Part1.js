//////////////////////////...Part 1.../////////////////////

var image = new SimpleImage("hilton.jpg");
print(image);

var width = image.getWidth();
for(var pixel of image.values())
{
    if(pixel.getX() < ((1/3)*(width)))
    {
        pixel.setRed(255);
    }
    else if(pixel.getX() > ((2/3)*(width)))
    {
        pixel.setBlue(255);
    }
    else
    {
        pixel.setGreen(255);
    }
}
print("3 FILTER: ", image);
///////////////////////////////////////////////////////////////////