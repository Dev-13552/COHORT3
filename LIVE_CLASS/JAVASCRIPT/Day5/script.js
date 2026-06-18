
const main = document.querySelector('main')
const button = document.querySelector('button')
const timer = document.querySelector('#timer')
const overlay = document.querySelector(".overlay")
const reset = document.querySelector('.reset')

const box = document.createElement('div')
box.classList.add('box');

let intervalId;
let timeOutId;
let time = 0;
let flag = false;

button.addEventListener('click', (e) => {

        button.disabled = true;
    clearInterval(intervalId);
    clearTimeout(timeOutId);
    intervalId = setInterval(() => {
        addBox();
    }, 1000)

    timeOutId = setTimeout(() => {
        clearInterval(intervalId);
        // button.disabled = false;
        // flag = true;
        overlay.style.display = 'flex'
    }, 10000);

})

reset.addEventListener('click', (e) => {
    time = 0;
    button.disabled = false;
    overlay.style.display = 'none'
    box.remove()
})

function addBox(){
    main.appendChild(box)
    time += 1;
    timer.textContent = time;
    box.style.top = `${generateRandom()}%`
    box.style.left = `${generateRandom()}%`
}

function generateRandom(){
    return Math.ceil(Math.random()*100);
}