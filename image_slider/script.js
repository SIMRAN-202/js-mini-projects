const prev_btn = document.getElementById('prev')
const next_btn = document.getElementById('next')
const slides = document.querySelectorAll('.slide')

let currentSlide = 0

function showSlide(index){
    slides.forEach((slide, i)=>{
        slide.classList.remove('active')
        if(index === i){
            slide.classList.add('active')
        }
    })
}


prev_btn.addEventListener('click',()=>{
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide)
})

next_btn.addEventListener('click',()=>{
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide)
})


setInterval(()=>{
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide)
}, 2000)