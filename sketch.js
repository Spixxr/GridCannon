var cnv;
function setup(){
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(windowWidth/2 - width/2, windowHeight/2 - height/2);
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    cnv.position(windowWidth/2 - width/2, windowHeight/2 - height/2);
}