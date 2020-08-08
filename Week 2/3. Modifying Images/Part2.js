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