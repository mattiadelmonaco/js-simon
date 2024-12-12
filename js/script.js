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
const errorMessageElm = document.getElementById("error-message")
const error = document.getElementById("error")
const btnReset = document.getElementById("btn-reset")
const btnReset2 = document.getElementById("btn-reset2")
const gameHiddenElm = document.getElementById("hidden")
const readyElm = document.getElementById("ready")
const playElm = document.getElementById("play")

// GLOBAL VARIABLES

let countdown = 29
let randomNumberArray = []

// LOGIC 

// befone game start
playElm.addEventListener("click", function() {
    readyElm.classList.add("d-none")
    playElm.classList.add("d-none")
    gameHiddenElm.classList.remove("d-none")
    // countdown and functions
    const endCountdown = setInterval(() => {
    if (countdown === 0) {
        clearInterval(endCountdown)
        randomNumberContainerElm.classList.add("d-none")
        numberFieldElm.classList.remove("d-none")
        btnReset.classList.remove("d-none")
        btnReset.classList.add("d-block")
        confirmElm.removeAttribute("disabled")
        btnReset.addEventListener("click", function (){
            location.reload()
        })
    } 
    counterElm.innerHTML = countdown
    countdown--
}, 1000)
})

// cicle to get 5 random numbers and put to an array

for (let i = 0; i < randomNumberElm.length; i++) {
    let randomNumber = getRandomNumber(1, 99)
    randomNumberArray.push(randomNumber)
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
            errorMessageElm.classList.remove("d-none")
            error.innerHTML = (`Hai inserito ${userNumberElm[i].value} nel campo ${i + 1} e non è valido! Riprova inserendo un numero compreso tra 1 e 99`)
            return
        } else if (userNumberElm[i].value === "") {
            errorMessageElm.classList.remove("d-none")
            error.innerHTML = (`Il campo ${i + 1} è vuoto! Inserisci un numero compreso tra 1 e 99`)
            return
        }
    }

    // counter correct numbers and array with witch numbers
    let correctNumbers = 0
    let foundNumber = []
    for (let i = 0; i < userNumberArray.length; i++) {
        if (randomNumberArray.includes(userNumberArray[i]) && !foundNumber.includes(userNumberArray[i])) {
            correctNumbers++
            foundNumber.push(userNumberArray[i])
        }
    }

numberGuessElm.innerHTML = `Hai indovinato ${correctNumbers} numeri! (${foundNumber})`

})

// reset to second button "riprova"
btnReset2.addEventListener("click", function() {
    location.reload()
})
