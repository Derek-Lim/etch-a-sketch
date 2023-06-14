const body = document.querySelector('body');
const container = document.querySelector('div');

//create 16x16 grid of square divs
const row = [];
for (i = 0; i < 16; i++) {
    row[i] = document.createElement('div');
    row[i].classList.add('row');
    row[i].setAttribute('style', 'display: flex; justify-content: center;');
    container.append(row[i]);
    const div = [];
    for (j = 0; j < 16; j++) {
        div[j] = document.createElement('div');
        div[j].classList.add([j]);
        div[j].setAttribute('style', 'height: 45px; width: 45px; border: solid black')
        row[i].append(div[j]);
    }
}   