// assign variables to buttons
const decrease = document.querySelector('#btn-decrease')
const reset = document.querySelector('#btn-reset')
const increase = document.querySelector('#btn-increase')

// declare count variable
let count = 0

// declare h2 element variable
let h2 = document.querySelector('h2')

// assign text in h2 to count
h2.innerText = count

// event listeners for buttons
decrease.addEventListener('click',decreaseCount)
reset.addEventListener('click',resetCount)
increase.addEventListener('click',increaseCount)

// functions
function decreaseCount(){
    h2.innerText--
}

function resetCount(){
    h2.innerText = 0
}

function increaseCount(){
    h2.innerText++
}