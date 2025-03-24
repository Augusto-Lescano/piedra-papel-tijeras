function getComputerChoice(){
  let randomNumber=Math.random()
  if(randomNumber<=0.6 && randomNumber>=0.4){
    console.log('Rock')
  }
  else if(randomNumber>0.6){
    console.log('Paper')
  }
  else if(randomNumber<0.4){
    console.log('Scissors')
  }
}

function getHumanChoice(){
  let humanChoice=prompt('Enter one of the options[Rock, Pape, Scissors]: ')
  console.log(humanChoice);
}

getHumanChoice();