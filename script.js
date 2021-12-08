//DONE images of both Heads and Tails of a coin
//DONE.random method for the coin toss 
//DONE choices for the user
//DONE string printed to see if you win/lose
//DONE buttons for the choices and to play again
//DONE counting whether it has landed on heads/tails. 
//DONE disable the click image after coin has been flipped.
//img of coin not picked by user disappears.
//some kind of background to capture the users attention for their win = color green
//loss color = red
//sounds on users choice win/lose
//gambling/betting
//DONE disable play again until we are ready to use it.
//previous selections list

//assign what each choice is valuewise
let headsChoice = 0
let tailsChoice = 1
//global variable of the count
let countWins = 0, countLosses = 0

//flip coin action
function flipTheCoin(choice) {
  let flip = Math.round(Math.random())
  console.log(flip)
  if(choice === "h") {
    document.querySelector("#usersChoice").innerHTML = "Heads"

  }else {
    document.querySelector("#usersChoice").innerHTML = "Tails"
  }

  //disable button before the coin flip
  document.querySelector("#playAgain").disabled = false
  
  //flipping the coin(actual outcome) 
  if(flip === 0) {
    document.querySelector("#gameFlip").src="img/Heads-img.jpg"
  }else {
    document.querySelector("#gameFlip").src="img/tails_img.png"
  }

  //if the flip outcome is heads and the users choice is heads the countWins
  if((choice === "h" && flip === 0) || (choice === "t" && flip === 1)) {
    countWins++
    document.querySelector("#result").innerHTML = "You Win!"
  }else if((choice === "h" && flip === 1) || (choice === "t" && flip === 0)) {
    countLosses++
    document.querySelector("#result").innerHTML = "You Lose!"
  }

  //print countWins
  document.querySelector("#wins").innerHTML = countWins
  //print countLosses
  document.querySelector("#losses").innerHTML = countLosses


//disable clickable img.
  document.querySelector("#imgHeads").disabled = true
  document.querySelector("#imgTails").disabled = true

//insert "play again" btn
  document.querySelector("#playAgain").addEventListener("click", function() {

//hide the text of the result of game
  document.querySelector("#result").innerHTML = ""

//reset users choice
  document.querySelector("#usersChoice").innerHTML = ""

//reset the center image
  document.querySelector("#gameFlip").src=""

//reset the images for heads/tails
  document.querySelector("#imgHeads").disabled = false
  document.querySelector("#imgTails").disabled = false
  document.querySelector("#playAgain").disabled = true
  })
}

//heads img for being clickable
document.querySelector("#imgHeads").addEventListener("click",function(){
  flipTheCoin("h")
})

//tails img
document.querySelector("#imgTails").addEventListener("click", function(){
flipTheCoin("t")
})