const increment = document.getElementById('increment-btn')
const decrement = document.getElementById('decrement-btn')
const resetting = document.getElementById('reset-btn')
const counter = document.getElementById('count')

let count=0

function updateColor(){
    if (count > 0){
        counter.style.color = "green"
    }
    else if(count < 0){
        counter.style.color = "red"
    }
    else{
        counter.style.color = "white"
    }
}

function increase(){
    count += 1
    counter.textContent = count
    updateColor()
}

function decrease(){
    count -= 1
    counter.textContent = count
    updateColor()
}

function reset(){
    count = 0
    counter.textContent = count
    updateColor()
}

