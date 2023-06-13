const body = document.querySelector('body');
const container = document.querySelector('div');

//create 16 div's
const row = [];
for (i = 0; i < 16; i++) {
    row[i] = document.createElement('div');
    row[i].classList.add('row');
    row[i].setAttribute('style', 'display: flex; justify-content: center;');
    container.append(row[i]);
}

//add 16 div's to each div
row.forEach(create16Divs);

function create16Divs() {
    const div = [];
    for (i = 0; i < 16; i++) {
        div[i] = document.createElement('div');
        div[i].setAttribute('style', 'height: 45px; width: 45px; border: solid black')
        row[i].append(div[i]);
    }
}