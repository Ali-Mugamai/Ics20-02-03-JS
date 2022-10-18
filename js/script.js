// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function gets users house number and street name and shows it back to user.
 */
function enterClicked() {
  // input
  const usersstreetname = document.getElementById("streetname").value
  const userhousenumber = parseInt(
    document.getElementById("streetnumber").value
  )
  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + userhousenumber + usersstreetname + "."
}
