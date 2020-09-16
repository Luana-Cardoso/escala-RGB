let = square = document.querySelector('#coloredSquare');

let redRange = document.querySelector('#redRange');
let greenRange = document.querySelector('#greenRange');
let blueRange = document.querySelector('#blueRange');

let redCode = document.querySelector('#redCode');
let greenCode = document.querySelector('#greenCode');
let blueCode = document.querySelector('#blueCode');

window.addEventListener('load', () => {
    coloredSquare();
});

redRange.addEventListener('change', redChange);
greenRange.addEventListener('change', greenChange);
blueRange.addEventListener('change', blueChange);


function redChange(e){
    redCode.value = e.target.value
    coloredSquare()
}

function greenChange(e){
    greenCode.value = e.target.value
    coloredSquare()
}

function blueChange (e){
    blueCode.value = e.target.value
    coloredSquare()
}

function coloredSquare(){
    R = redCode.value;
    G = greenCode.value;
    B = blueCode.value;

    square.style.backgroundColor = `rgb(${R} ${G} ${B})`;
}