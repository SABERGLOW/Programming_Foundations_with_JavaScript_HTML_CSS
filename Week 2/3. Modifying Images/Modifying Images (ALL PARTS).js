//////////////////////////...Modifying Images.../////////////////////

//////////////////////////...PART 1.../////////////////////

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


//////////////////////////...Part 2.../////////////////////

function swapRedGreen(pixel)
{
    var red = pixel.getRed();
    var green = pixel.getGreen();
    pixel.setRed(green);
    pixel.setGreen(red)
}

var image = new SimpleImage("eastereggs.jpg");
print(image);


for(var pixel of image.values())
{
    swapRedGreen(pixel);
}
print("RedGreen Swapped: ", image);
///////////////////////////////////////////////////////////////////


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
