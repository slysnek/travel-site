const images = document.querySelectorAll(".slider-image");
const buttons = document.querySelectorAll(".circle");
const activeButton = document.querySelector(".circle.center");
const leftArrow = document.querySelector(".arrow-dest.left");
const rightArrow = document.querySelector(".arrow-dest.right");

let offset = 0;

function slider(){
    images[0].addEventListener('click', function() {
        offset = 800;
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(${offset}px)`
        }
        buttons[1].classList.remove("center")
        buttons[0].classList.add("center")
    })

    images[1].addEventListener('click', function() {
        offset = 0
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(${offset}px)`
        }
        
        buttons[0].classList.remove("center")
        buttons[2].classList.remove("center")
        buttons[1].classList.add("center")
    })

    images[2].addEventListener('click', function() {
        offset = -800;
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(${offset}px)`
        }
        
        buttons[1].classList.remove("center")
        buttons[2].classList.add("center")
    })
}

function slider_mobile(){

}

slider()