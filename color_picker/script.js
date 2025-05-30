const color = document.getElementById('colorInput')

color.addEventListener('input' , ()=>{
    document.body.style.backgroundColor = color.value
})