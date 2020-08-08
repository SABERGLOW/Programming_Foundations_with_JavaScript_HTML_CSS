//////////////////////////...Part 3.../////////////////////

function blueDevilYellow(pixel)
{
    if((pixel.getRed()!=255) && (pixel.getBlue()!=255) && (pixel.getGreen()!=255)) //... means the pixel is NOT white
    {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}


var image = new SimpleImage("duke_blue_devil.png");
print(image);


for(var pixel of image.values())
{
    blueDevilYellow(pixel);
}
print("Yellow Devil: ", image);
///////////////////////////////////////////////////////////////////