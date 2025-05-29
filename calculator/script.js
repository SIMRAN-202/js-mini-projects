const buttons = document.querySelectorAll('.calculator-content button')
let input = document.getElementById('inputValue')
let expression=""

buttons.forEach(button=>{
    button.addEventListener('click',e=>{
        const {textContent} = e.target
        if(!isNaN(textContent)){
            if (input.value ==='0'){
                input.value = textContent
                expression = textContent
            }
            else{
                input.value += textContent
                expression += textContent
            }
        }

    })
})

function add(){
    expression += "+"
    input.value += "+"
}
function subtract(){
    expression += "-"
    input.value += "-"
}
function multiply(){
    expression += "*"
    input.value += "*"
}
function divide(){
    expression += "/"
    input.value += "/"
}

function calculate(){
    try {
        const result = eval(expression)
        input.value = result
        expression = result.toString()
    } catch (error) {
        input.value = "ERROR"
        expression = ""
    }
}

function reset(){
    input.value = "0"
    expression = ""
}