const images = document.querySelectorAll(".slider-image");
const buttons = document.querySelectorAll(".circle");
const leftArrow = document.querySelector(".arrow-dest.left");
const rightArrow = document.querySelector(".arrow-dest.right");

function changeImage1() {
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
}

function changeImage2() {
    offset = 0
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translateX(${offset}px)`
    }
    buttons[0].classList.remove("active")
    buttons[2].classList.remove("active")
    buttons[1].classList.add("active")
}

function changeImage3() {
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
}

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

    images[0].addEventListener('click', changeImage1)

    images[1].addEventListener('click', changeImage2)

    images[2].addEventListener('click', changeImage3)

}

function slider_mobile(){
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translateX(0px)`
    }

    let activeButton = document.querySelector(".active");
    console.log(buttons)
    if (activeButton !== null){
        activeButton.classList.remove("active");
    }
    
    buttons[0].classList.add("active")
    console.log(buttons[0])

    let offset = 0;

    images[0].removeEventListener('click', changeImage1)

    images[1].removeEventListener('click', changeImage2)

    images[2].removeEventListener('click', changeImage3)


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
        }else if(buttons[1].classList.contains("active")){
            buttons[1].classList.remove("active")
            buttons[0].classList.add("active")
        }else if(buttons[2].classList.contains("active")){
            buttons[2].classList.remove("active")
            buttons[1].classList.add("active")
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
        }else if(buttons[1].classList.contains("active")){
            buttons[1].classList.remove("active")
            buttons[2].classList.add("active")
        }else if(buttons[2].classList.contains("active")){
            buttons[2].classList.remove("active")
            buttons[0].classList.add("active")
        }
    })
}

if (innerWidth < 391){
    slider_mobile();
    window.addEventListener('resize', () => {
        if (innerWidth>390){
            slider();
        }
    })
} else{
    slider();
    window.addEventListener('resize', () => {
        if (innerWidth<391){
            slider_mobile();
        }
    })
}


