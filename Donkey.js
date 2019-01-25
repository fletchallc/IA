window.onload = initAll;
var canvas;
var ctx;
var aGuess = false;
var bGuess = false;
var cGuess = false;
var dGuess = false;
var deathCounter=0;
var correctRandom= (Math.floor(Math.random()*4+2));
var correctRandom2= (Math.floor(Math.random()*4+2));
var correctRandom3= (Math.floor(Math.random()*4+2));
var ran1 = (Math.floor(Math.random()*4));
var ran2 = (Math.floor(Math.random()*4));
while(ran2 == ran1)
{
    ran2 = (Math.floor(Math.random()*4));
}
var ran3 = (Math.floor(Math.random()*4));
while(ran3 == ran2 || ran3 == ran1)
{
    ran3 = (Math.floor(Math.random()*4));
}
var ran4 = (Math.floor(Math.random()*4));
while(ran4 == ran3 || ran4 == ran2 || ran4 == ran1)
{
    ran4 = (Math.floor(Math.random()*4));
}
var answerArray =[];
answerArray[0] = (correctRandom2*correctRandom)+"x^"+(correctRandom2-1);
answerArray[1] = (correctRandom2*correctRandom2)+"x^"+(correctRandom2);
answerArray[2] = (correctRandom2*correctRandom)+"x^"+(correctRandom2+1);;
answerArray[3] = (correctRandom3*correctRandom)+"x^"+(correctRandom2+2);;;
var x = 100;
var y = 90;
var barrelRadius = 10;
var xVal = 3;
var xSpeed =[xVal,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ySpeed =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var xpos1 = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
var ypos1 = [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90];
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
var upPressed = false;
var downPressed = false;
var counter =0;
xMario=100;
yMario=470;
var vol = 5.5;
var level = 0;
var lev = 1;
var inLadders = false;
var peachRow = false;
var fallSpeed=2;
var xPeach=155;
var barrelRadius2=9;
var interval;
var checkAnswer;
interval = setInterval(startScreen,10);
function initAll()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown",keyDownHandler,false);
    document.addEventListener("keyup",keyUpHandler,false);
    play();
    questions();
    gameOver();
    startScreen();
}
function startScreen()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "80px Courier";
    ctx.fillText("DONKEY KONG",230,230);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "25px Courier";
    ctx.fillText("(Press space to begin)",320,330)
    ctx.closePath();
    if(spacePressed)
    {
        clearInterval(interval);
        interval = setInterval(play,10);
    }
}
function gameOver()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "80px                                                                                                                                                                        ";
    ctx.fillText("GAME OVER",300,230)
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "40px Courier";
    ctx.fillText("You made it to level: "+lev,250,330)
    ctx.closePath();
}
function questions()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "20px Courier";
    ctx.fillText("What is the derivative of "+correctRandom+"x^"+correctRandom2+"+"+correctRandom3,350,20)
    ctx.closePath();
      // a choice + answer box
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "20px Courier";
    ctx.fillText("(A)",80,150)
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.rect(140,110,300,100)
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "20px Courier";
    ctx.fillText(answerArray[ran1],150,130)
    ctx.closePath();
      // b choice + answer box
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "20px Courier";
    ctx.fillText("(B)",630,150)
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.rect(690,110,300,100)
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "20px Courier";
    ctx.fillText(answerArray[ran2],700,130)
    ctx.closePath();
      // c choice + answer box
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "20px Courier";
    ctx.fillText("(C)",80,400)
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.rect(140,360,300,100)
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "20px Courier";
    ctx.fillText(answerArray[ran3],150,380)
    ctx.closePath();
      // d choice + answer box
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "20px Courier";
    ctx.fillText("(D)",630,400)
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.rect(690,360,300,100)
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "20px Courier";
    ctx.fillText(answerArray[ran4],700,380)
    ctx.closePath();

    if(aGuess == true)
    {
        if(answerArray[ran1] == answerArray[0])
        {
            checkAnswer = true;
        }
        else
        {
            checkAnswer = false;
        }
    }
    if(bGuess == true)
    {
        if(answerArray[ran2] == answerArray[0])
        {
            checkAnswer = true;
        }
        else
        {
            checkAnswer = false;
        }
    }
    if(cGuess == true)
    {
        if(answerArray[ran3] == answerArray[0])
        {
            checkAnswer = true;
        }
        else
        {
            checkAnswer = false;
        }
    }
    if(dGuess == true)
    {
        if(answerArray[ran4] == answerArray[0])
        {
            checkAnswer = true;
        }
        else
        {
            checkAnswer = false;
        }
    }
    if(checkAnswer == true)
    {
        clearInterval(interval);
        interval = setInterval(play,10);
        deathCounter++;
        newReset();
        
    }
    if(checkAnswer == false)
    {
        clearInterval(interval);
        interval = setInterval(gameOver,10);
    }
}
function play()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawRows();
    drawBarrel();
    drawMario();
    drawLadders();
    drawPeach();
    writeLevel();
    boundaries();
    collision();
    if(rightPressed)
    {
        xMario+=3;
        downPressed=false;
    }
    if(leftPressed)
    {
        xMario-=3;
        downPressed=false;
    }
    if(spacePressed)
    {
        vol-=0.19;
        yMario-=vol;
        if(yMario>=470 && level ==0) 
        {
            spacePressed=false;
            yMario=470;
            vol=5.5;
        }
        else if(yMario>=340&& level ==1) 
        {
            spacePressed=false;
            yMario=340;
            vol=5.5;
        }
        else if(yMario>=210&& level ==2) 
        {
            spacePressed=false;
            yMario=210;
            vol=5.5;
        } 
        else if(yMario>=80&& level ==3) 
        {
            spacePressed=false;
            yMario=80;
            vol=5.5;
        }
        else if(yMario>=30&& level ==4) 
        {
            spacePressed=false;
            yMario=30;
            vol=5.5;
        }
    }
    if(upPressed && xMario>=620 && xMario<=640 && yMario>340)
    {
        downPressed=false;
        inLadders=true;
        yMario-=1;
        rightPressed=false;
        leftPressed=false;
        if(yMario==340)
        {
            upPressed=false;
            level++;
            inLadders=false;
        }
    }
    if(upPressed && xMario>=120 && xMario<=140 && yMario>=210 && yMario<=340)
    {
        downPressed=false;
        inLadders=true;
        yMario-=1;
        rightPressed=false;
        leftPressed=false;
        if(yMario==210)
        {
           upPressed=false;
           level++;
           inLadders=false;
        }
    }
    if(upPressed && xMario>=780 && xMario<=800 && yMario<=210 && yMario>=80)
    {
        downPressed=false;
        inLadders=true;
        yMario-=1;
        rightPressed=false;
        leftPressed=false;
        if(yMario==80)
        {
            upPressed=false;
            level++;
            inLadders=false;
        }
    }
    if(downPressed && xMario>=620 && xMario<=640 && yMario>339 && level ==1)
    {
        inLadders=true;
        yMario+=1;
        rightPressed=false;
        leftPressed=false;
        if(yMario==470)
        {
            downPressed=false;
            level--;
            inLadders=false;
        }
    }
    if(downPressed && xMario>=120 && xMario<=140 && yMario>=210 && level==2)
    {
        inLadders=true;
        yMario+=1;
        rightPressed=false;
        leftPressed=false;
        if(yMario==340)
        {
            downPressed=false;
            level--;
            inLadders=false;
        }
    }
    if(downPressed && xMario>=780 && xMario<=800 && yMario>50 && level==3)
    {
        inLadders=true;
        yMario+=1;
        rightPressed=false;
        leftPressed=false;
        
        if(yMario==210)
        {
            downPressed=false;
            level--;
            inLadders=false;
        }
    }
    if(upPressed && xMario>=210 && xMario<=230 && yMario<=100 && yMario>=30)
    {
        inLadders=true;
        yMario-=1;
        rightPressed=false;
        leftPressed=false;
        if(yMario==30)
        {
            upPressed=false;
            level++;
            inLadders=false;
            peachRow=true;
        }
    }
    if(peachRow==true && level==4 && (xMario<130 || xMario>250)) 
    {
        rightPressed=false;
        leftPressed=false;
        yMario+=fallSpeed;
        if(yMario==80)
        {
           fallSpeed=0;
           level=3;
        }
        fallSpeed=2;
    }
    if(level==4 && xPeach+20>=xMario && xPeach+20<=xMario+20)
    {
        reset();
    }
    if(upPressed == true && inLadders==false)
    {
        upPressed=false;
    }
}
function writeLevel()
{
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "38px Courier";
    ctx.fillText("Level: "+lev,800,50)
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.font = "26px Courier";
    ctx.fillText("Save Princess Peach!",400,50)
    ctx.closePath();
}
function boundaries()
{
    if(yMario==470 && xMario<100)
    {
        xMario = 100;
    }
    if(yMario==470 && xMario>880)
    {
        xMario = 880;
    }

    if(yMario==340 && xMario<50)
    {
        xMario = 50;
    }
    if(yMario==340 && xMario>830)
    {
        xMario = 830;
    }
    if(yMario==210 && xMario<100)
    {
        xMario = 100;
    }
    if(yMario==210 && xMario>880)
    {
        xMario = 880;
    }
    if(yMario==80 && xMario<50)
    {
        xMario = 50;
    }
    if(yMario==80 && xMario>830)
    {
        xMario = 830;
    }
}
function drawRows()
{
    ctx.beginPath();
    for(var i=0;i<4;i=i+2)
    {
        ctx.rect(50,(100 + (130*i)), canvas.width-200, 15);
        ctx.fillStyle = "red";
    }
    for(var i=1;i<4;i=i+2)
    {
        ctx.rect(100,(100 + (130*i)), canvas.width-200, 15);
        ctx.fillStyle = "red";
    }
    ctx.rect(150,50,100,10)
    ctx.fill();
    ctx.closePath();
   
}
function drawPeach()
{
    //155
    ctx.beginPath();
    ctx.fillStyle = "tan";
    ctx.rect(xPeach,30,20,20)
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(162,40,5,2)
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "magenta";
    ctx.rect(155,43,20,7)
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(159,35,3,3)
    ctx.rect(168,35,3,3)
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(155,30,20,4)
    ctx.fill();
    ctx.closePath();

}
function drawBarrel()
{
    for(var i=0;i<xpos1.length;i++)
    { 
        ctx.beginPath();
        ctx.fillStyle = "tan";
        ctx.arc(xpos1[i],ypos1[i],barrelRadius2,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        xpos1[i]+=xSpeed[i];
        ypos1[i]+=ySpeed[i];
        
        if((ypos1[i]>=350 && ypos1[i]<=365))
        {
            xSpeed[i]=xVal;
            ySpeed[i]=0;
        }
        if(xpos1[i]>=860)
        {
            xSpeed[i]=0;
            ySpeed[i]=xVal;
            xpos1[i] = 859;
        }
        if(ypos1[i]>=220 && ypos1[i]<=235)
        {
            xSpeed[i]=-xVal;
            ySpeed[i]=0;
        }
      
        if(xpos1[i]<=90)
        {
            xSpeed[i]=0;
            ySpeed[i]=3;
            xpos1[i] = 91;
        }
        if(ypos1[i]>=480&& ypos1[i]<=495)
        {
            xSpeed[i]=-xVal;
            ySpeed[i]=0;
        }
        if(xpos1[i]==400)
        {
            xSpeed[i+1]=xVal;
        }
    }
}
function drawMario()
{
    //100, 470
    ctx.beginPath();
    ctx.fillStyle = "tan";
    ctx.rect(xMario,yMario,20,20);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(xMario,yMario,20,4);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(xMario,yMario+12,5,5);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(xMario+15,yMario+12,5,5);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(xMario+5,yMario+12,10,5);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(xMario+2,yMario+12,5,5);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(xMario+13,yMario+12,5,5);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect(xMario,yMario+15,20,5);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(xMario+3,yMario+16,3,4);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.rect(xMario+14,yMario+16,3,4);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(xMario+6,yMario+8,2,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(xMario+13,yMario+8,2,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();

}
function keyDownHandler(e)
{
    if(e.keyCode==39)
    {
        rightPressed=true;
    }
    else if(e.keyCode==37)
    {
        leftPressed=true;
    }
    else if(e.keyCode==32)
    {
        spacePressed = true;
    }
    else if(e.keyCode==38)
    {
        upPressed = true;
    }
    else if(e.keyCode==40)
    {
        downPressed=true;
    }
    else if(e.keyCode==65)
    {
        aGuess = true;
    }
    else if(e.keyCode==66)
    {
        bGuess = true;
    }
    else if(e.keyCode==67)
    {
        cGuess = true;
    }
    else if(e.keyCode==68)
    {
        dGuess = true;
    }
}
function keyUpHandler(e)
{
    if(e.keyCode==39)
    {
        rightPressed=false;
    }
    else if(e.keyCode==37)
    {
        leftPressed=false;
    }
    else if(e.keyCode==32)
    {
        spacePressed = true;
    }
    else if(e.keyCode==38)
    {
        spacePressed = false;
    }
    else if(e.keyCode==40)
    {
        spacePressed =false;
    }
    else if(e.keyCode==65)
    {
        aGuess = false;
    }
    else if(e.keyCode==66)
    {
        bGuess = false;
    }
    else if(e.keyCode==67)
    {
        cGuess = false;
    }
    else if(e.keyCode==68)
    {
        dGuess = false;
    }
}
function reset()
{
    level=0;
    lev++;
    xVal+=1;
    xMario=100;
    yMario=470; 
    xSpeed[0]=3;
    for(var i=0;i<xpos1.length;i++)
    {   
        ySpeed[i]=0;
        ypos1[i] = 90;
        xpos1[i]=100;
    }
    for(var i=1;i<xpos1.length;i++)
    {
        xSpeed[i]=0;
    }
    for(var i=0;i<xpos1.length;i++)
    {   
        ctx.beginPath();
        ctx.fillStyle = "tan";
        ctx.arc(xpos1[i],ypos1[i],barrelRadius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        xpos1[i]+=xSpeed[i];
        ypos1[i]+=ySpeed[i];
    }
}
function newReset()
{
    level=0;
    xMario=100;
    yMario=470; 
    xSpeed[0]=3;
    for(var i=0;i<xpos1.length;i++)
    {   
        ySpeed[i]=0;
        ypos1[i] = 90;
        xpos1[i]=100;
    }
    for(var i=1;i<xpos1.length;i++)
    {
        xSpeed[i]=0;
    }
    for(var i=0;i<xpos1.length;i++)
    {   
        ctx.beginPath();
        ctx.fillStyle = "tan";
        ctx.arc(xpos1[i],ypos1[i],barrelRadius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        xpos1[i]+=xSpeed[i];
        ypos1[i]+=ySpeed[i];
    }
}
function collision()
{
    for(var i=0;i<xpos1.length;i++)
    {
        if(xMario+20>xpos1[i] && xMario+20<=xpos1[i]+barrelRadius && ypos1[i]>yMario && ypos1[i]<=yMario+20)
        {
            clearInterval(interval);
            interval = setInterval(questions,10);
        }
        if(xMario+20>xpos1[i] && xMario+20<=xpos1[i]+barrelRadius && ypos1[i]>yMario && ypos1[i]<=yMario+20 && deathCounter==1)
        {
            clearInterval(interval);
            interval = setInterval(gameOver,10);
        }
    }
}
function drawLadders()
{
    ctx.beginPath();
    ctx.fillStyle = "cyan";
    ctx.rect(780,115,10,115);
    ctx.rect(800,115,10,115);

    //ladder rungs 1st level
    ctx.rect(780,118,20,7);
    ctx.rect(780,133,20,7);
    ctx.rect(780,148,20,7);
    ctx.rect(780,163,20,7);
    ctx.rect(780,178,20,7);
    ctx.rect(780,193,20,7);
    ctx.rect(780,208,20,7);
    ctx.rect(780,223,20,7);


    ctx.rect(120,245,10,115);
    ctx.rect(140,245,10,115);

    //ladder rungs 2nd level
    ctx.rect(120,248,20,7);
    ctx.rect(120,263,20,7);
    ctx.rect(120,278,20,7);
    ctx.rect(120,293,20,7);
    ctx.rect(120,308,20,7);
    ctx.rect(120,323,20,7);
    ctx.rect(120,338,20,7);
    ctx.rect(120,353,20,7);

    ctx.rect(620,375,10,115);
    ctx.rect(640,375,10,115);

    //ladder rungs 3rd level
    ctx.rect(620,378,20,7);
    ctx.rect(620,393,20,7);
    ctx.rect(620,408,20,7);
    ctx.rect(620,423,20,7);
    ctx.rect(620,438,20,7);
    ctx.rect(620,453,20,7);
    ctx.rect(620,468,20,7);
    ctx.rect(620,483,20,7);


    ctx.rect(210,60,10,40);
    ctx.rect(230,60,10,40);
    //peach level
    ctx.rect(210,63,20,7);
    ctx.rect(210,78,20,7);
    ctx.rect(210,93,20,7);

    ctx.fill();
    ctx.closePath();
}
