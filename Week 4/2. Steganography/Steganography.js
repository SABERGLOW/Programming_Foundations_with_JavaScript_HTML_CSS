
function clearbits(pixelValue) {
    var x = Math.floor(pixelValue/16)*16;
    return x;
}

function chop2Hide(start) {
    for (var px of start.values()){
        px.setRed(clearbits(px.getRed()));
        px.setGreen(clearbits(px.getGreen()));
        px.setBlue(clearbits(px.getBlue()));
    }
    return start;
}

function shift(hide)
{
    for (var px of hide.values())
    {
        px.setRed((px.getRed()/16));
        px.setGreen((px.getGreen()/16));
        px.setBlue((px.getBlue()/16));
    }
    return hide;
}

function combine(start, hide)
{
    var res = new SimpleImage(start.getWidth(),start.getHeight());
    for (var px of res.values())
    {
        var x = px.getX();
        var y = px.getY();

        var startPixel = start.getPixel(x,y);
        var hidePixel = hide.getPixel(x,y);

        px.setRed(startPixel.getRed()+hidePixel.getRed());
        px.setGreen(startPixel.getGreen()+hidePixel.getGreen());
        px.setBlue(startPixel.getBlue()+hidePixel.getBlue());
    }
    return hide;
}


var start = new SimpleImage("duke_blue_devil.png")
var hide = new SimpleImage("pixabayhands.jpg")

start = chop2Hide(start);
hide = shift(hide);
var res = combine(start, hide)

print(res);