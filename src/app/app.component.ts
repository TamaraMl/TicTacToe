import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: string = "x";
  userResult: string;
  message: string = "Current user is ";
  disable: boolean = false;

  calculateWinner(maxNum: number, maxSteps: number, elFirstStep: number, elSecondStep: number, startNum: number = 0) {
      var btnElem = document.querySelectorAll('.js-button');
      for(let i=startNum; i<maxNum; i=i+maxSteps) {
          //check if button is not empty
          if(btnElem[i].innerHTML != "-" && btnElem[i + elFirstStep].innerHTML != "-" && btnElem[i + elSecondStep].innerHTML != "-") {
              //check row or column or diagonal elements
              if(btnElem[i].innerHTML === btnElem[i + elFirstStep].innerHTML && btnElem[i].innerHTML === btnElem[i + elSecondStep].innerHTML) {
                  this.user = btnElem[i].innerHTML;
                  this.message = "Winner is: "; //change message
                  this.disable = true; //disable buttons
                  btnElem[i].classList.add("match");
                  btnElem[i + elFirstStep].classList.add("match");
                  btnElem[i + elSecondStep].classList.add("match");
              }
          }
      }
  }



    myMethod($event) {
        /* On click update field and user */
        let clickedEl = $event.target;

        this.userResult = this.user === "x" ? "x" : "o"; // take value of clicked button
        clickedEl.innerHTML = this.user; // print it
        clickedEl.disabled = true; // disable it

        this.user = this.user === "x" ? "o" : "x";  // take first player and change it


        /*
        * CHECK WINNER
        * */

        var btnElem = document.querySelectorAll('.js-button');

        //first we check columns
        this.calculateWinner(9,3, 1, 2);

        //second we check rows
        this.calculateWinner(3,1, 3, 6);

        //third we check 2 diagonals
        this.calculateWinner(1,1, 4, 8);
        this.calculateWinner(3,1, 2, 4, 2);

        if(this.disable) {
            for(let i=0;i<btnElem.length;i++) { // reset all buttons
                btnElem[i].setAttribute("disabled","true");
            }
        }

    }

    resetGame() {
        this.user = "x";
        this.message = "Current user is"; //reset message
        this.disable = false;
        var btnElem = document.querySelectorAll('.js-button');
        for(let i=0;i<btnElem.length;i++) { // reset all buttons
            btnElem[i].innerHTML = "-";
            btnElem[i].removeAttribute("disabled");
            btnElem[i].classList.remove("match");
        }
    }
}