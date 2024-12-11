// FUNCTIONS
/**
 * Generate a random number between a min and a max
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @returns {number}
 */

function getRandomNumber(min, max) {
    let randomNumber = (Math.floor((Math.random()) * (max - min + 1) + min))
    return randomNumber
    }

// DOM ELEMENTS 

const counterElm = document.getElementById("counter")
const randomNumberElm = document.querySelectorAll(".random-number")
const numberFieldElm = document.getElementById("number-field")
const confirmElm = document.getElementById("confirm")
const numberGuessElm = document.getElementById("number-guess")
const randomNumberContainer = document.getElementById("random-number-container")

// GLOBAL VARIABLES

let countdown = 3
let randomNumberArray = []

// LOGIC 

// countdown and functions

const endCountdown = setInterval(() => {
    if (countdown === 0) {
        clearInterval(endCountdown)
        // randomNumberContainer.classList.add ("d-none")
    } 
    counterElm.innerHTML = countdown
    countdown--
}, 1000)

// cicle to get 5 random numbers and put to an array

for (i = 0; i < randomNumberElm.length; i++) {
    let randomNumber = getRandomNumber(1, 99)
    randomNumberArray.push(randomNumber)
    randomNumberElm.innerHTML = randomNumberArray
}

// cicle to inner in html the random number in array

for (i = 0; i < randomNumberElm.length; i++) {
    randomNumberElm[i].innerHTML = randomNumberArray[i]
}
console.log(randomNumberElm)

    
