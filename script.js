let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorespara = document.querySelector("#comp-score");
const scoreReset = document.querySelector(".msg-container");

const choices = document.querySelectorAll(".choice");


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () =>{
    const option = ["rock","paper","scissor"];
    let rand = Math.floor(Math.random() * 3);
    return option[rand];
};



const drawGame = () =>{
    msg.innerText = "Draw";
    msg.style.backgroundColor = " #081b31";
   
};


const showUserWin = (userWin,userChoice ,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText =`You win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorespara.innerText = compScore;
        msg.innerText =`You lose!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}











const playGame = (userChoice) =>{
    console.log("UserChoice = ",userChoice);
    //gen computer choice
    const compChoice = genCompChoice()
    console.log("CompChoice =",compChoice);


    if(compChoice ===userChoice){
        //Draw Condition
        drawGame();
        
    }
else{
    let  userWin = true;
    if(userChoice ==="rock"){

        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice ==="paper"){
        userWin = compChoice === "scissors" ? false : true;
    }
    else{
        userWin = compChoice === "rock" ? false : true;
    }
    showUserWin(userWin,userChoice,compChoice);
}
    






 };

 scoreReset.addEventListener("click", () =>{
    userScorepara.innerText = "0";
    compScorespara.innerText = "0";
    msg.innerText = "Play your move";
    msg.style.backgroundColor = " #081b31";
    userScore = 0;
    compScore = 0;
    

})
 



