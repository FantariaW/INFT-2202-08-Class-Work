//click on box and it show an X
//const boxes = document.getElementsByClassName('box');

//boxes array 
// for(let i = 0; i < boxes.length; i++){
//     boxes[i].addEventListener("click", (event) => {
//         //console.log(event);
//         console.log('box' + event.target.classList[2] + " was clicked");
//     });
// }
//console.log("boxes");

const mainContainer = document.querySelector(".main-container");
mainContainer.addEventListener("click", (event) => {
    console.log('box' + event.target.classList[2] + "was Clicked");
    event.target.innerText = "X";
});

const playerTurn = 'X';