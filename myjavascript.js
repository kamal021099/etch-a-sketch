const gridContainer = document.querySelector(".grid-container");
let size=16;
let root = document.querySelector(":root");
root.style.setProperty("--size",size);

// its the grid
function makeGrid(){
    let container = document.createElement('div');
    container.classList.add("container");
    
    for(let i=0; i<size; i++)
    {
        for(let j=0; j<size; j++)
    
        {
            let box=document.createElement('div');
            box.classList.add("box");
            container.appendChild(box);
    
        }
    }
    gridContainer.appendChild(container);
}

function addHover(){
    //adding hover event to all the boxes.
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = "blue";
        })
    })       
}

//reset the grid.
function resetBox()
{
    boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    })
}

function gridSize()
{
  size = prompt("Enter the new size of the grid(1-100");
  
  if(size<=50 && size>=1)
  {
    root.style.setProperty('--size',size);
    let container = document.querySelector(".container");
    container.remove();
    resetBox();
    makeGrid();
    addHover();
  }
  else{
      alert("dont be a smartass.");
  }

}


makeGrid();
addHover();

const reset = document.querySelector("#reset");
reset.addEventListener('click',resetBox)

// //clear the current grid and prompt for new size.
const clear= document.querySelector("#clear");
clear.addEventListener('click', gridSize);

















