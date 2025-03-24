function getComputerChoice(){
  let randomNumber=Math.random()
  if(randomNumber<=0.6 && randomNumber>=0.4){
    return 'rock'
  }
  else if(randomNumber>0.6){
    return 'paper'
  }
  else if(randomNumber<0.4){
    return 'scissors'
  }
}

function getHumanChoice(){
  let humanChoice=prompt('Enter one of the options[Rock, Paper, Scissors]: ')
  return humanChoice.toLowerCase()
}

let humanScore=0
let computerScore=0


function playRound(humanChoice, computerChoice){
  console.log('Elección de humano:'+' '+humanChoice)
  console.log('Elección de la computadora:'+' '+computerChoice)
  if(humanChoice===computerChoice){
    console.log('Empate')
  }
  else if(humanChoice==='rock'){
    if(computerChoice==='paper'){
    console.log('La compu gana el round')
    computerChoice+=1
    }else{
      console.log('Gana el humano el round')
      humanScore+=1
    }
  }
  else if(humanChoice==='paper'){
    if(computerChoice==='rock'){
      console.log('Gana el humano el round')
      humanScore+=1
    }else{
      console.log('Gana la compu el round')
      computerScore+=1
    }
  }
  else if(humanChoice==='scissors'){
    if(computerChoice==='paper'){
      console.log('Gana el humano el round')
      humanScore+=1
    }else{
      console.log('Gana la compu el round')
      computerScore+=1
    }
  }
}




function playGame(){
  for(let i=0;i<5;i++){
    playRound(getHumanChoice(),getComputerChoice())
  }
  console.log('Resultados de la partida')
  console.log('Humano:'+' '+humanScore)
  console.log('Computadora:'+' '+computerScore)
  if(humanScore===computerScore){
    console.log('Empate!!!')
  }
  else if(humanScore>computerScore){
    console.log('Ganan los humanos!!!')
  }
  else{
    console.log('Ganan las computadoras!!!')
  }
}

playGame()

