const open_btn = document.getElementById('openModalBtn')
const close_btn = document.getElementById('closeModalBtn')
const modal = document.getElementById('myModal')
const ok_btn = modal.querySelector('button')

function openModal(){
    modal.style.display = "block"
}

function closeModal (){
    modal.style.display = "none"
}

open_btn.addEventListener('click', openModal)
close_btn.addEventListener('click', closeModal)
ok_btn.addEventListener('click', closeModal)

window.addEventListener('click', function(event){
    if (event.target === modal){
        closeModal()
    }
})