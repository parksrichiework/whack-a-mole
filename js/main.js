const squares = document.querySelectorAll('.square')
const mole= document.querySelector('.mole')
const timeLeft= document.querySelector('#time-left')
const score=document.querySelector('#score')
const playAgain=document.querySelector('.play-again')


let result= 0
let hitPosition
let currentTime = 2
let timerId = null


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
function moveMole(){
    
    timerId = setInterval(randomSquare, 2000) //chnage this number to extend or shorten time
}

// randomSquare()
moveMole()



function countDown(){
currentTime--
timeLeft.textContent = currentTime

if(currentTime == 0){
    clearInterval(countdownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your final score is: ' + result)
    playAgain.style.display= 'flex'
}
}

let countdownTimerId = setInterval(countDown, 1000)