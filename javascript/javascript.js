function getComputerChoice()
{
    let c = Math.floor(Math.random()*3);
    if(c===0)
    {
        return 'Rock';
    }
    else if (c==1)
    {
        return 'Paper';
    }
    else
    {
        return 'Scissors';
    }

}



function playRound(playerSelection , computerSelection)
{
    if(playerSelection.toUpperCase()==="ROCK" && computerSelection.toUpperCase()==="ROCK")
        return "Draw";
    else if ((playerSelection.toUpperCase()==="ROCK" && computerSelection.toUpperCase()==="PAPER"))
        return "Lost";
    else if ((playerSelection.toUpperCase()==="ROCK" && computerSelection.toUpperCase()==="SCISSORS"))
        return "Win";

    else if ((playerSelection.toUpperCase()==="PAPER" && computerSelection.toUpperCase()==="ROCK"))
        return "Win";    
    else if ((playerSelection.toUpperCase()==="PAPER" && computerSelection.toUpperCase()==="PAPER"))
        return "Draw";    
    else if ((playerSelection.toUpperCase()==="PAPER" && computerSelection.toUpperCase()==="SCISSORS"))
        return "Lost";    

    else if ((playerSelection.toUpperCase()==="SCISSORS" && computerSelection.toUpperCase()==="ROCK"))
        return "Lost";    
    else if ((playerSelection.toUpperCase()==="SCISSORS" && computerSelection.toUpperCase()==="PAPER"))
        return "Win";    
    else if ((playerSelection.toUpperCase()==="SCISSORS" && computerSelection.toUpperCase()==="SCISSORS"))
        return "Draw";    
        
}


function game()
{
    for(let i = 0 ; i<5 ; i++)
    {
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let result =  playRound(playerSelection,getComputerChoice());
        console.log(result);
    }
}