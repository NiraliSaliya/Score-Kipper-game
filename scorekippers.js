var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document. getElementById("Reset");
var scorekip = document.querySelector("#scorekip");
var scorekip2= document.querySelector("#scorekip2");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");


var p = document.querySelector("p")
var p1Score = 0;
var p2Score = 0;
var gameover = false;
var winningScore = 5;
p1Button.addEventListener("click", function(){ 

	if (!gameover){
			p1Score++;
			if (p1Score === winningScore){
				scorekip.classList.add("winner");
				gameover = true;
			}
	scorekip.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){ 
	if (!gameover){
	p2Score++;
	if (p2Score === winningScore){
		scorekip2.classList.add("winner");
				gameover = true;
			}
	scorekip2.textContent = p2Score;
}
});

function reset(){
p1Score = 0;
p2Score = 0;
p1Display.textContent= 0;
p2Display.textContent= 0;
p1Display.classList.remove("winner");
p2Display.classList.remove("winner");
gameover = false;
}


numInput.addEventListener("change", function(){
winningScoreDisplay.textContent = this.value;
winningScore = Number (this.value);
reset();
})