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
const randomNumberContainerElm = document.getElementById("random-number-container")
const userNumberElm = document.querySelectorAll(".user-number")

// GLOBAL VARIABLES

let countdown = 3
let randomNumberArray = []

// LOGIC 

// countdown and functions

const endCountdown = setInterval(() => {
    if (countdown === 0) {
        clearInterval(endCountdown)
        // randomNumberContainerElm.classList.add ("d-none")
    } 
    counterElm.innerHTML = countdown
    countdown--
}, 1000)

// cicle to get 5 random numbers and put to an array

for (let i = 0; i < randomNumberElm.length; i++) {
    let randomNumber = getRandomNumber(1, 99)
    randomNumberArray.push(randomNumber)
    randomNumberElm.innerHTML = randomNumberArray
}

// cicle to inner in html the random number in array

for (let i = 0; i < randomNumberElm.length; i++) {
    randomNumberElm[i].innerHTML = randomNumberArray[i]
}

// click on confirm

confirmElm.addEventListener("click", function() {
    // array with user numbers
    let userNumberArray = []
    for (let i = 0; i < userNumberElm.length; i++) {
        userNumberArray.push(parseInt(userNumberElm[i].value))
    //check if user numbers are < 1 or > 99 and if the field is empty
        if (userNumberArray[i] < 1 || userNumberArray[i] > 99) {
            alert(`Hai inserito ${userNumberElm[i].value} nel campo ${i + 1} e non è valido! Riprova inserendo un numero compreso tra 1 e 99`)
            return
        } else if (userNumberElm[i].value === "") {
            alert(`Il campo ${i + 1} è vuoto! Inserisci un numero compreso tra 1 e 99`)
            return
        }
    }

    // counter correct numbers and array with witch numbers
    let correctNumbers = 0
    let foundNumber = []
    for (let i = 0; i < userNumberArray.length; i++) {
        if (randomNumberArray.includes(userNumberArray[i])) {
            correctNumbers++
            foundNumber.push(userNumberArray[i])
        }
    }

numberGuessElm.innerHTML = `Hai indovinato ${correctNumbers} numeri! (${foundNumber})`

})

