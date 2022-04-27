// assign variables to buttons
const decrease = document.querySelector('#btn-decrease')
const reset = document.querySelector('#btn-reset')
const increase = document.querySelector('#btn-increase')

// declare count variable
let count = 0

// declare h2 element variable
let h2 = document.querySelector('h2')

// assign text in h2 to count
h2.textContent = count

// event listeners for buttons
decrease.addEventListener('click',decreaseCount)
reset.addEventListener('click',resetCount)
increase.addEventListener('click',increaseCount)

// functions
function decreaseCount(){
    h2.textContent--
    changeColor()
}

function resetCount(){
    h2.textContent = 0
    h2.style.color = 'black'
}

function increaseCount(){
    h2.textContent++
    changeColor()
}

// change color based on neg / pos value
function changeColor(){
    if (h2.textContent < 0){
        h2.style.color = 'red'
    } else if (h2.textContent > 0){
        h2.style.color = 'green'
    }
}