
// let size;
// function gridSize()
// {
//   prompt("Enter the new size of the grid")
// }

const container = document.querySelector(".container");


// its the grid
for(let i=0; i<16; i++)
{
    for(let i=0; i<16; i++)

    {
        let box=document.createElement('div');
        box.classList.add("box")
        // box.innerText = "box";
        container.appendChild(box);

    }
}


//adding hover event to all the boxes.
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = "blue";
})
})


// reset the grid.
const reset = document.querySelector("#reset");
reset.addEventListener('click', () => {
boxes.forEach(box => {
    box.style.backgroundColor = "white";
})
})

//clear the current grid and prompt for new size.
