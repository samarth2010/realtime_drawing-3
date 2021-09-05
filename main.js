noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;

function setup()
{
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(550,500);
  canvas.position(560,150);

  posenet= ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses);
}

function modelloaded()
{
    console.log("pnisIn");
}

function gotPoses(results)
{
    if(results.lenght >0);
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

            console.log("noseX="+noseX+"noseY="+noseY);

        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX);
        difference=floor(leftwristX-rightwristX);
        console.log("diference="+ difference);
     }
}

function draw()
{
    background('#43464B');

    fill(color(0, 0, 255));
    square( noseX,noseY,difference);
    document.getElementById("sq_si").innerHTML="The Hieght and Width of the Square ="+difference;
}