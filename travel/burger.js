function burgerFunction() {
    const nav = document.getElementById('nav');
document.querySelector('.burger-menu').addEventListener("click", function(){
        nav.style.right = "0px";
    })
document.querySelector('.close').addEventListener("click", function(){
        nav.style.right = "-200px";
    })
}

burgerFunction();