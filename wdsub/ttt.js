let winText = document.querySelector("#end-of-game p");
let squareArr= document.querySelectorAll("div.ttt-square");
let EOGDiv =document.getElementById("end-of-game");
let currentPlayer="X";

for(const element of squareArr){
  element.addEventListener("click",(event)=> markSymbol(event));
}



function markSymbol(event){
 let clickSquare = event.target;
  
  if (clickSquare.innerText==""){
    clickSquare.innerText= currentPlayer;
    
    if (checkWinner()==false) checkDraw();
    changePlayer();
    
    
  }
}


function checkWinner(){
  let isGameOver = false
  
  //check for three in a row
  for(let i =0;i<3; i++){
    if (squareArr[3*i].innerText==currentPlayer 
      && squareArr[3*i+1].innerText==currentPlayer 
      && squareArr[3*i+2].innerText==currentPlayer) isGameOver=true;
    
  }
    
  //check for three in a column
  for(let i =0;i<3; i++){
    if (squareArr[i].innerText==currentPlayer 
      && squareArr[i+3].innerText==currentPlayer 
      && squareArr[i+6].innerText==currentPlayer) isGameOver=true;
    
  }
  //check for three in a diag
  if (squareArr[0].innerText==currentPlayer 
      && squareArr[4].innerText==currentPlayer 
      && squareArr[8].innerText==currentPlayer) isGameOver=true
    
  else if (squareArr[2].innerText==currentPlayer 
      && squareArr[4].innerText==currentPlayer  
      && squareArr[6].innerText==currentPlayer) isGameOver=true
    
    
  //if game is over, display end-of-game div
  if(isGameOver) showWinner();
  return isGameOver
    
}
  
  function checkDraw(){
    let isDraw =true;
    for (const elem of squareArr){
      if(elem.innerText=="")isDraw =false
    }
    
    if (isDraw){
      showDraw();
    
  }
  }
    function showWinner(){
      EOGDiv.style.display="block"
    }


    function showDraw(){
    EOGDiv.style.display="block";
  
}
function changePlayer(){
  currentPlayer=((currentPlayer=="X"))?"O":"X"
  }

function resetGame() {
  //Hide end of game div
  EOGDiv.style.display="none";
  //Clear the board
  for (const elem of squareArr) {
    elem.innerText="";
  }
  
}
