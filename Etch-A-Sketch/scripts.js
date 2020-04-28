const container = document.querySelector("#container");
let grids;
let colorScheme = "BLACK";
let opacity = 1;


createGrid(16);
// create grid in container
function createGrid(gridSize){
    const gridWidth = 600 / gridSize;
    for (let rows = 0; rows < gridSize; rows++) {
        for (let columns = 0; columns < gridSize; columns++) {
            let div = document.createElement('div');
            div.className = "grid";
            div.style.width=(600 / gridSize) + 'px';
            div.style.height=(600 / gridSize) + 'px';
            container.appendChild(div);
        }
    }
    grids = document.querySelectorAll("#container div");
    grids.forEach(grid => grid.addEventListener('mouseover', changeColor));
}
//
const controls = document.querySelectorAll('#menu button');
controls.forEach(control => control.addEventListener('click', changeColorScheme));

// function to reset the grid
function clearGrid(){
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

// prompt for new grid
function resetGrid(){
    let divCount = prompt("How many boxes per side do you need?");
    clearGrid();
    createGrid(divCount);
}

//change color on hover
function changeColor(e){
    if (colorScheme == "BLACK"){
      e.target.style.backgroundColor = "BLACK";
      e.target.style.opacity = 1;
    } else if (colorScheme == "RAINBOW"){
      e.target.style.backgroundColor = "#" + Math.floor(Math.random() * 4096).toString(16);
      e.target.style.opacity = 1;
    } else if (colorScheme == "DARKEN"){
        let darken = Number(e.target.style.opacity);
        e.target.style.opacity = darken += 0.1;
        e.target.style.backgroundColor = '#000';
    }
}
function changeColorScheme(e){
    colorScheme = e.target.textContent;
    if(colorScheme == "DARKEN"){
      opacity = 0;
    } else{
      opacity = 1;
    }
}

// set new grid on button click
document.getElementById("reset").addEventListener("click", resetGrid);