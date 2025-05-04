// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn Lukose
// Created on: April 2025
// This file contains the JS functions for index.html
/**
 * This function generates random positive or negative number
 */

function generateNumber() {
  // input
  const optionPositive = document.getElementById("option-positive").checked

  // generate a new random number every time
  const randomNumber = Math.floor(Math.random() * 6) + 1

  // output
  if (optionPositive === true) {
    document.getElementById("answer").innerHTML =
      "Your random number is: " + randomNumber
  } else {
    const randomNegativeNumber = randomNumber * -1
    document.getElementById("answer").innerHTML =
      "Your random number is: " + randomNegativeNumber
  }
}
