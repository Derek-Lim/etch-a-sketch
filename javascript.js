const body = document.querySelector('body');
body.setAttribute('style',
    'display: flex; flex-direction: column; align-items: center; gap: 20px;')
const buttonContainer = document.querySelector('#buttonContainer')
const button = document.createElement('button');
buttonContainer.append(button);
button.textContent = "Click to set grid size (max: 100)";

//create function that asks user for number of squares per side of grid
let getGridSize = function() {
    gridSize = +prompt('Size: ');
    while (gridSize <= 0 || gridSize > 100) {
        gridSize = prompt('Please enter a valid number');
    }
    return gridSize;
}

// make button prompt user when clicked
button.addEventListener('click', () => {
    //remove previous grid and create new container for new grid
    let container = document.querySelector('.container');
    container.remove();
    container = document.createElement('div');
    body.append(container);
    container.classList.add('container');
    container.setAttribute('style',
        'display: flex; flex-direction: column; height: 725px; width: 725px;')

    //ask user for grid size
    getGridSize();

    //create 16x16 grid of square divs
    const row = [];
    for (i = 0; i < gridSize; i++) {
        row[i] = document.createElement('div');
        row[i].classList.add('row');
        row[i].setAttribute('style', 'display: flex; flex-grow: 1;');
        container.append(row[i]);
        const div = [];
        for (j = 0; j < gridSize; j++) {
            div[j] = document.createElement('div');
            div[j].classList.add('square');
            div[j].setAttribute('style',
            'display: flex; flex-grow: 1; border: solid black')
            row[i].append(div[j]);
        }
    } 

    //make divs toggle between black and white as mouse hovers over
    const divs = document.querySelectorAll('.square')
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {div.classList.toggle('black');});
    })
});