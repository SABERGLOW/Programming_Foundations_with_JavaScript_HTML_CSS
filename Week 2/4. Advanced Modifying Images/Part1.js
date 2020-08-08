//////////////////////////...Advanced Modifying Images.../////////////////////
var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("Dinos.png");

//... output image with same size as foreground image ...//
var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());

for(var pixel of fgImage.values())
{
    if(pixel.getGreen() > (pixel.getBlue() + pixel.getRed())) //...pixel is green
    {
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x,y);
        output.setPixel(x,y,bgPixel); // output's pixel is now set to bgPixel
    }
    else
    {
        output.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
    
}
print("Green: ", output);
///////////////////////////////////////////////////////////////////

