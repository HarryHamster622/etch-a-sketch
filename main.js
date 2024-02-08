let gridContainer = document.querySelector('#grid');

let sideLength = prompt('How long would you like the sides of the grid to be?');

if (sideLength > 99) {
    sideLength = 99;
}

for (i = 0; i < sideLength; i++) {
    let gridRow = document.createElement('div');
    gridRow.classList.add('gridRow')
    for (j = 0; j < sideLength; j++) {
        let gridSpot = document.createElement('div')
        gridRow.appendChild(gridSpot);
    }
    gridContainer.appendChild(gridRow);
}