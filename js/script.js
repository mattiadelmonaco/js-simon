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
const randomNumberElm = document.getElementById("random-number")
const numberFieldElm = document.getElementById("number-field")
const confirmElm = document.getElementById("confirm")
const numberGuessElm = document.getElementById("number-guess")

// LOGIC 


