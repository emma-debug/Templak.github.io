
const productCarousel = document.querySelector(".carousel");
const photoContainer = document.querySelector(".ph-container");
const selectorContainer = document.querySelector(".ph-selector-container");
const photoSelectors = document.querySelectorAll(".ph-selector");


/*selector de informacion */
const productWrapper = document.querySelector(".product-wrapper");
const infoSelectors = document.querySelectorAll(".info-selector-btn");


const titleSection = document.querySelector(".title-section");
titleSection.textContent = "Otros paneles";

photoSelectors.forEach((ph,index)=>{
    // console.log(ph)
    ph.addEventListener("click",e=>{
        e.preventDefault();
        photoContainer.style.transform = 'translate(' + (index) * -25  +'%)';
        document.querySelector(".ph-selected").classList.remove("ph-selected");
        ph.classList.add("ph-selected")
    })
})



infoSelectors.forEach((btn,index) =>{
    btn.addEventListener("click",e=>{
        e.preventDefault();
        productWrapper.style.transform = 'translate(' + (index) * -50  +'%)';
        document.querySelector(".info-selected").classList.remove("info-selected");
        btn.classList.add("info-selected")
    })
    // console.log(btn,index)
})



const modal = document.querySelector(".modal");
const desktopButtons = document.querySelector(".desktop-version");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const phContainerModal = document.querySelector(".ph-container-modal");

const closeModal = document.querySelector(".close-modal");

photoContainer.addEventListener("click",(e)=>{
    modal.style.display = 'block';

})

closeModal.addEventListener("click",(e)=>{modal.style.display = 'none';})




const carouselModal = document.querySelector(".modal-carousel");
const images = document.querySelectorAll(".product-img");

nextBtn.addEventListener("click", () => {
    carouselModal.scrollBy({
        left: carousel.clientWidth, // Desplaza el ancho visible
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    carouselModal.scrollBy({
        left: -carousel.clientWidth, // Retrocede el ancho visible
        behavior: "smooth"
    });
});


window.addEventListener('scroll', () => {
    if (modal.style.display === 'block') { // Solo si el modal está abierto
        modal.style.display = 'none';
    }
});

const nombrePagina = window.location.pathname.split('/').pop();
console.log(nombrePagina)
const listaPaneles = document.querySelectorAll(".product-box");


if (nombrePagina == "panel-400w"){
    listaPaneles[0].style.display = "none";

}
else if(nombrePagina == "panel-600w"){
    listaPaneles[1].style.display = "none";

}
else if(nombrePagina == "panel-800w"){
    listaPaneles[2].style.display = "none";


}