const buttons = document.querySelectorAll('.accordian_toggle')
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const heading = button.parentElement;
        const content = heading.nextElementSibling;

        if (content.classList.contains('hidden')){
            content.classList.remove('hidden');
            content.classList.add('show');
            button.textContent = "-"
        } 
        else{
            content.classList.remove('show');
            content.classList.add('hidden');
            button.textContent = "+"
        }
    })
})
