document.addEventListener("DOMContentLoaded", init);


function init(){

  //alert("test");

  var numPlayer = 2;
  var clickCount = 0;
  var currentPlayer = 1;
  // var winningCombi = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];
  // var playerXSelection = [];
  // var playerXSelection = [];

  var boxes = document.getElementsByClassName("box");
// or use querySelectorAll

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", boxClicked);
  }

  var resetButtonClicked = document.getElementById("resetButton");
  resetButtonClicked.addEventListener("click", reset);

  function reset() {
    location.reload();
  }

  function boxClicked () {

    // alert("box is clicked" + this.id);
    console.log(this.id + " is clicked.");


    if (

      // use thsi logic if(boxes[this.id] === "X" || boxes.[this.id])
      // document.getElementById(this.id)


      boxes[this.id].innerHTML === "X" || boxes[this.id].innerHTML === "O"

      // below code does not work as one box is always fill in from the first click
      // boxes[0].innerHTML == "X" || boxes[0].innerHTML == "O" ||
      // boxes[1].innerHTML == "X" || boxes[1].innerHTML == "O" ||
      // boxes[2].innerHTML == "X" || boxes[2].innerHTML == "O" ||
      // boxes[3].innerHTML == "X" || boxes[3].innerHTML == "O" ||
      // boxes[4].innerHTML == "X" || boxes[4].innerHTML == "O" ||
      // boxes[5].innerHTML == "X" || boxes[5].innerHTML == "O" ||
      // boxes[6].innerHTML == "X" || boxes[6].innerHTML == "O" ||
      // boxes[7].innerHTML == "X" || boxes[7].innerHTML == "O" ||
      // boxes[8].innerHTML == "X" || boxes[8].innerHTML == "O"
      )
      {

        alert("Box filled, pls choose another one.")
        console.log("bbbb " + currentPlayer)
        // currentPlayer = currentPlayer; does not work

      }

      else {

        if (currentPlayer === 1) {
            this.classList.add("clickX");
            this.innerHTML = "X";
            // console.log(this.innerHTML);
          }

        if (currentPlayer === 2) {
            this.classList.add("clickO");
            this.innerHTML = "O";
            // console.log(this.innerHTML);
          }

          checkWon();
          switchPlayer();
          console.log("cccc " + currentPlayer)
          clickCount += 1;
          console.log(clickCount);
      }
      }







    function switchPlayer () {
      if (currentPlayer === 1) {
        currentPlayer = 2;
      }
      else {
        currentPlayer = 1;
      }
      console.log("current player is: " + currentPlayer);
    }







  function checkWon () {

    if ( boxes[0].innerHTML === boxes[1].innerHTML && boxes[0].innerHTML === boxes[2].innerHTML ) {
      if (currentPlayer === 1) {
        alert("Player 1 (X) won!");
      }
      else {
        alert("Player 2 (O) won!");
      }
    }

    else if ( boxes[3].innerHTML === boxes[4].innerHTML && boxes[3].innerHTML === boxes[5].innerHTML ) {
      if (currentPlayer === 1) {
        alert("Player 1 (X) won!");
      }
      else {
        alert("Player 2 (O) won!");
      }
    }

    else if ( boxes[6].innerHTML === boxes[7].innerHTML && boxes[6].innerHTML === boxes[8].innerHTML ) {
      if (currentPlayer === 1) {
        alert("Player 1 (X) won!");
      }
      else {
        alert("Player 2 (O) won!");
      }
    }

    else if ( boxes[0].innerHTML === boxes[3].innerHTML && boxes[0].innerHTML === boxes[6].innerHTML ) {
      if (currentPlayer === 1) {
        alert("Player 1 (X) won!");
      }
      else {
        alert("Player 2 (O) won!");
      }
    }

    else if ( boxes[1].innerHTML === boxes[4].innerHTML && boxes[1].innerHTML === boxes[7].innerHTML ) {
      if (currentPlayer === 1) {
        alert("Player 1 (X) won!");
      }
      else {
        alert("Player 2 (O) won!");
      }
    }

    else if ( boxes[2].innerHTML === boxes[5].innerHTML && boxes[2].innerHTML === boxes[8].innerHTML ) {
      if (currentPlayer === 1) {
        alert("Player 1 (X) won!");
      }
      else {
        alert("Player 2 (O) won!");
      }
    }

    else if ( boxes[0].innerHTML === boxes[4].innerHTML && boxes[0].innerHTML === boxes[8].innerHTML ) {
      if (currentPlayer === 1) {
        alert("Player 1 (X) won!");
      }
      else {
        alert("Player 2 (O) won!");
      }
    }

    else if ( boxes[2].innerHTML === boxes[4].innerHTML && boxes[2].innerHTML === boxes[6].innerHTML ) {
      if (currentPlayer === 1) {
        alert("Player 1 (X) won!");
      }
      else {
        alert("Player 2 (O) won!");
      }
    }

    else if (clickCount === 8) {
      // console.log(clickCount);
      alert("Game over. Pls restart game by clicking on Reset Game button.");
    }

  }

}
