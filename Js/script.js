const menu = document.querySelector(".burger-menu")
const menuMobile = document.querySelector(".menu-mobile")
const carousel = document.querySelector(".carousel")
const buttons = document.querySelectorAll(".button")

menu.addEventListener("click",showfunction)

function showfunction(e) {
    e.preventDefault()
    menuMobile.classList.toggle("visible")
}



buttons.forEach((btn,index) => {
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log(btn,index)
        sliderCarousel.style.transform = 'translate(' + (index) * -33.333  +'%)';
        document.querySelector(".button-selected").classList.remove("button-selected");
        btn.classList.add("button-selected");
    })

});


const carouselContainer = document.querySelector(".carousel-container")
const carousel2 = document.querySelector(".carousel")
const sliderCarousel = document.querySelector(".slider-carousel")
