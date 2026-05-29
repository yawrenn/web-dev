let queryParms = new URLSearchParams(window.location.search);
const P1_STRATS= queryParams.get("p1Strats");
const P2_STRATS= queryParams.get("p2Strats");


const PAYOFF_CELL_CONTENTS = "(<input type='number'>,<input type='number'>)"

buildMatrix();


function buildMatrix(){
  let matrix= document.getElementById("matrix");
  
  //loop (P1_STRATS + 1) number of times. Create a row div each iteration.
  for (let i = 0; i < (P1_STRATS + 1); i++){
    //Create a row div
    let newRow = document.createElement("div");
    newRow.classList.add("matrix-row");
    matrix.append(newRow);
    
    //loop (P2_STRATS + 1)number of times. Create a cell div each iteration
    for (let j = 0; j < (P2_STRATS + 1); j++){
      //Create a cell div
      let newCell = document.createElement("div");
      if (i==0 && j==0) newCell.classList.add("empty-cell")
      else if (i==0){ 
        newCell.classList.add("strat-cell");
        newCell.innerHTML = "t<sub>" + j + "</sub>";
      } else if(j==0){
        newCell.classList.add("strat-cell");
        newCell.innerHTML = "s<sub>" + i + "</sub>"
      }else{
        newCell.classList.add("payoff-cell");
        newCell.innerHTML =PAYOFF_CELL_CONTENTS;
        
      }
      newRow.append(newCell);
    
    }
        
  }
}

function randomize(){
  let inputArr =document.querySelectorAll(".payoff-cell input");
  const MAX = 100;
  const MIN = -100;
  for (const elem of inputArr){
    elem.value= Math.floor(Math.random()*(MAX-MIN) + MIN);
  }
}
  
  
  function compute() {
    let p1PayArr =document.querySelectorAll(".payoff-cell input:first-child");
    let p2PayArr =document.querySelectorAll(".payoff-cell input:last-child");
    let payCellArr=document.querySelectorAll(".payoff-cell");
    
    //remove old classes
    for (const elem of payCellArr){
      if (elem.classList.contains("eliminated")) elem.classLIst.remove("eliminated")
      if (elem.classList.contains("ne")) elem.classLIst.remove("ne")
      
    }
    
    //loop through each column, finding the best response out of every row
    for(let j = 0; j < P2_STRATS; j++){
      let largest = -Infinity;
      
      //identify the highest payoff inthis column
     for(let i=0; i < P1_STRATS ; i++){
       if (Number(p1PayArr[P2_STRATS*i+j].value) > Number(largest)) largest = p1PayArr[P2_STRATS*i+j].value;
       
     }
      //eliminate any cells whcih arent best responses
     for(let i = 0; i < P1_STRATS; j++){
       if (Number(p1PayArr[P2_STRATS * i + j].value) != Number(largest))payCellArr[P2_STRATS * i + j].classList.add("eliminated");
     }
     
    }
    for(let i=0; i < P1_STRATS; i++){
      let largest = -Infinity;
      //identify the highest payoff inthis column
     for(let j = 0; j <P2_STRATS;j++){
       if (Number(p1PayArr[P2_STRATS*i+j].value) > Number(largest)) largest = p2PayArr[P2_STRATS*i+j].value;
       
     }
      //eliminate any cells whcih arent best responses
     for(let j = 0; j < P1STRATS; i++){
       if (Number(p1PayArr[P2_STRATS * i + j].value) != Number(largest))payCellArr[P2_STRATS * i + j].classList.add("eliminated");
     }
      
    
    //Loop through each row, finding the best responses for both players
    // Apply no class to any cell with best rsponses for both players
      for (const elem of payCellArr){
        if(elem.classList.contains("elimnated")=false) elem.classList.add("ne");
        
      }
}
  }
