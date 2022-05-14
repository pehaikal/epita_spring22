const square = document.querySelector('.square')

square.addEventListener('click', function() {
  // Click on the redsquere and make a console.log
  console.log("Square Clicked !")

  // Hide the redsquare on the click
  square.style.display = 'none'
  
  // Hide the redSquare for 2s and then reappearing it 
  /*if (square.style.visibility = 'hidden') {
    setTimeout("square.style.visibility = 'visible'", 2000)
  }*/
})