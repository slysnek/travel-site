const images = document.querySelectorAll(".slider-image");
const buttons = document.querySelectorAll(".circle");
const leftArrow = document.querySelector(".arrow-dest.left");
const rightArrow = document.querySelector(".arrow-dest.right");



function slider(){

    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translateX(0px)`
    }

    let activeButton = document.querySelector(".active");
    if (activeButton !== null){
        activeButton.classList.remove("active");
    }

    buttons[1].classList.add("active")
    
    let offset = 0;
    images[0].addEventListener('click', function() {
        offset = 800;
        if(window.innerWidth < 1200) {
            offset = 400;
        }
        if(window.innerWidth < 700) {
            offset = 150;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(${offset}px)`
        }
        buttons[1].classList.remove("active")
        buttons[0].classList.add("active")
    })

    images[1].addEventListener('click', function() {
        offset = 0
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(${offset}px)`
        }
        buttons[0].classList.remove("active")
        buttons[2].classList.remove("active")
        buttons[1].classList.add("active")
    })

    images[2].addEventListener('click', function() {
        offset = -800;

        if(window.innerWidth < 1200) {
            offset = -400;
        }

        if(window.innerWidth < 700) {
            offset = -150;
        }

        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(${offset}px)`
        }
        buttons[0].classList.remove("active")
        buttons[1].classList.remove("active")
        buttons[2].classList.add("active")
    })
}

function slider_mobile(){

    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translateX(0px)`
    }

    let activeButton = document.querySelector(".active");
    if (activeButton !== null){
        activeButton.classList.remove("active");
    }
    
    buttons[0].classList.add("active")

    let offset = 0;

    leftArrow.addEventListener('click', function() {
        offset += -840;
        if (offset == -1680){
            offset=-420;
        }
        if (offset == -1260){
            offset=0;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(${offset}px)`
        }
        if(buttons[0].classList.contains("active")){
            buttons[0].classList.remove("active")
            buttons[2].classList.add("active")
            console.log("left 1")
        }else if(buttons[1].classList.contains("active")){
            buttons[1].classList.remove("active")
            buttons[0].classList.add("active")
            console.log("left 2")
        }else if(buttons[2].classList.contains("active")){
            buttons[2].classList.remove("active")
            buttons[1].classList.add("active")
            console.log("left 3")
        }
    })

    rightArrow.addEventListener('click', function() {
        offset += -420;
        if (offset<-840){
            offset = 0;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = `translateX(${offset}px)`
        }
        if(buttons[0].classList.contains("active")){
            buttons[0].classList.remove("active")
            buttons[1].classList.add("active")
            console.log("right 1")
        }else if(buttons[1].classList.contains("active")){
            buttons[1].classList.remove("active")
            buttons[2].classList.add("active")
            console.log("right 2")
        }else if(buttons[2].classList.contains("active")){
            buttons[2].classList.remove("active")
            buttons[0].classList.add("active")
            console.log("right 3")
        }
    })
}

slider()
slider_mobile();
