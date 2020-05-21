var shape = document.getElementById("shape");
var displayTimeElapsed = document.getElementById("time");
var randomInterval = 0;
var randomInterval2 = 0;
var randomIntervalSpeed = 1000;
var timeElapsed;
var start;
var end;

function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) 
	{
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function spawnTarget() 
{
    start = new Date().getTime();
    randomInterval = Math.floor(Math.random() * (500-1)) + 1;
    randomInterval2 = Math.floor(Math.random() * (1200-1)) + 1;
    shape.style.display = "block";
    shape.style.top = randomInterval + "px";
    shape.style.left = randomInterval2 + "px";
    shape.style.backgroundColor = getRandomColor();
}

setTimeout(spawnTarget, 1000);

shape.onclick = function() 
{
    end = new Date().getTime();
    timeElapsed = end - start;
    displayTimeElapsed.innerHTML = "Time elapsed: " + parseFloat(timeElapsed/1000).toFixed(3) + " seconds";
    shape.style.display = "none";
    //randomIntervalSpeed = (Math.floor(Math.random() * (3-1)) + 1) * 80;
    setTimeout(spawnTarget, randomIntervalSpeed);
}

document.body.onkeyup = function(e) 
{
	//if( e.keyCode == 32 ) 
	//{
		end = new Date().getTime();
		timeElapsed = end - start;
		displayTimeElapsed.innerHTML = "Time elapsed: " + parseFloat(timeElapsed/1000).toFixed(3) + " seconds";
		shape.style.display = "none";
		randomInterval = (Math.floor(Math.random() * (3-1)) + 1) * 1000;
		setTimeout(spawnTarget, randomIntervalSpeed);
	//}
}

function Sized()
{
	var ranged = document.getElementById("SizeRange");
	
	if (ranged.value == 0)
	{
		shape.style.width = "9px";
		shape.style.height = "9px";
	}
	
	if (ranged.value == 1)
	{
		shape.style.width = "15px";
		shape.style.height = "15px";
	}
	
	if (ranged.value == 2)
	{
		shape.style.width = "25px";
		shape.style.height = "25px";
	}
	
	if (ranged.value == 3)
	{
		shape.style.width = "50px";
		shape.style.height = "50px";
	}	
}

function Speeded()
{
	var ranged = document.getElementById("SpeedRange");
	
	if (ranged.value == 0)
	{
		randomIntervalSpeed = (Math.floor(Math.random() * (3-1)) + 1) * 1000;
	}
	
	if (ranged.value == 1)
	{
		randomIntervalSpeed = (Math.floor(Math.random() * (3-1)) + 1) * 500;
	}
	
	if (ranged.value == 2)
	{
		randomIntervalSpeed = (Math.floor(Math.random() * (3-1)) + 1) * 80;
	}
}