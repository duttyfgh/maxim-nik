const result = document.querySelector('#result')
const input = document.querySelector('.nik')
const button = document.querySelector('.btn')

const spesialSimvols = '`~!@#$%^&*()_+-=|\\/*'

let userValue = input.value

input.addEventListener('input', function() {
    userValue =  input.value.split('').map(function(item) {
    return item += spesialSimvols[Math.floor(Math.random() * spesialSimvols.length)]}).join('')
   
})

button.addEventListener('click', function(){
    result.textContent = userValue
})

document.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        result.textContent = userValue
    }
})