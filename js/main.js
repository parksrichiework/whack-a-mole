const squares = document.querySelectorAll('.square')
const mole= document.querySelector('.mole')
const timeLeft= document.querySelector('#time-left')
const score=document.querySelector('#score')
const playAgain=document.querySelector('.play-again')


let result= 0
let hitPosition
let currentTime = 33
let timerId = null
let countdownTimerId


function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')

    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    // console.log(randomSquare)

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if (square.id == hitPosition){
            result++
            score.textContent= result
            hitPosition = null
            }    
        })
    })



// will randomly move mole to a square based on time you set



// randomSquare()
alert('Let\'s get whacking!');


let closeDirections = document.querySelector('#close-button');
let directions = document.querySelector('#game-directions');
let directionsModal = document.querySelector('#game-directions-modal')

closeDirections.addEventListener('click', closeBox);

function closeBox(){
         directions.classList.add('closed');
         directionsModal.classList.add('closed')
         console.log('closed the directions');
         moveMole()
         countDown()
         startTimer()
         
               
         
  
       
      
   }

   function moveMole(){
    
    timerId = setInterval(randomSquare, 2000) //chnage this number to extend or shorten time mole spends in each box
}

function startTimer(){
    countdownTimerId =  setInterval(countDown, 1000) 
}



function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
     
   if(currentTime == 0){
       clearInterval(countdownTimerId)
       clearInterval(timerId)
       alert('GAME OVER! Your final score is: ' + result)
       playAgain.style.display= 'flex'
   } else{
       playAgain.style.display= 'none'
   }
   
}

// let countdownTimerId = setInterval(countDown, 1000) 
// playAgain.style.display= "none"
