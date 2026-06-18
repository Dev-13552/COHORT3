// Attributes vs Properties

// Attributes => pre-defined keywords in HTML
// Properties => value of attributes

// For example (id = '123'), here id is a attribute and 123 is a property



const div = document.querySelector('div')
const button = document.querySelector('button')
const btn = document.querySelector('.btn')
const main = document.querySelector('main')

button.addEventListener('click', () => {
    if(div.classList.toggle('lightUp')){
        button.textContent = 'Light off'
    }
    else{
        button.textContent = 'Light Up'
    }
})

main.addEventListener('click', (e) => {
    console.log(e.target)
})