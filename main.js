let gridContainer = document.querySelector('#grid');

let sideLength = 8;

createGrid(sideLength);

function redrawGrid() {

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    sideLength = prompt('How long would you like the sides of the grid to be?');

    if (sideLength > 99) {
    sideLength = 99;
    }   

    createGrid(sideLength)
}

function createGrid(sL) {
    for (i = 0; i < sL; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('gridRow')
        for (j = 0; j < sL; j++) {
            let gridSpot = document.createElement('div')
            gridSpot.classList.add('gridSpot');
            gridRow.appendChild(gridSpot);
        }
        gridContainer.appendChild(gridRow);
    }
}