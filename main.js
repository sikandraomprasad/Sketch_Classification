function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background('white');
    
    synth=window.speechSynthesis;
}

function clearCanvas()
{
    background('white');

}

timer_counter=0;
timer="";
drawn_sketch="";
answer_holder="";
score=0;
