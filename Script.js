let userScoreup = 0;
let compScoreup = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");


const getCompChoice = () => {
    const opt = ["snake","gun","water"] ;
    const random = Math.floor(Math.random()*3);
    return opt[random];
}

const  showWinner = (userwin, userChoice, compChoice) =>{
    if(userwin){
        console.log("win");
        userScoreup++;
        userScore.innerText = userScoreup;
        msg.innerText = `You Win!! Your's ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "lightGreen";
    }
    else{
        console.log("lose");
        compScoreup++;
        compScore.innerText = compScoreup;
        msg.innerText = `You lose!! Comp's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

};

const draw = () =>{
    console.log("draw");
    msg.innerText = "Game was draw :|";
    msg.style.backgroundColor = "beige"

}
const playGame = (userChoice) => {
    console.log("user choics",userChoice);
    //generate comp choice
    const compChoice = getCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice === compChoice)
    {
        draw();
    }
    else{
        let userwin = true;
        if(userChoice === "snake")
        {
            userwin = compChoice === "gun" ? false:true;
        }
        else if(userChoice === "gun")
        {
            userwin = compChoice === "water" ? false:true;
        }
        else
        {
            userwin = compChoice === "snake" ? false:true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

