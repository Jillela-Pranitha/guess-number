let randomnumber=Math.ceil(Math.random()*100)
let input=document.getElementById("userInput")
let gameresult=document.getElementById("gameResult")
console.log(randomnumber)
function checkGuess(){
    let guess=parseInt(input.value)
    if(guess>randomnumber){
        gameresult.textContent = "Too High! Try Again.";
        gameresult.style.backgroundColor = "#1e217c";
    }
    else if(guess<randomnumber){
        gameresult.textContent = "Too Low! Try Again.";
        gameresult.style.backgroundColor = "#1e217c";
    }
    else if(guess==randomnumber){
        gameresult.textContent = "Congratulations! You got it right.";
        gameresult.style.backgroundColor = "green";
    }
    else{
        gameresult.textContent = "Please provide a valid input.";
        gameresult.style.backgroundColor = "#1e217c";
    }
}