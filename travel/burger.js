function burgerFunction() {
    const nav = document.getElementById('nav');
    document.querySelector('.burger-menu').addEventListener("click", function(){
        nav.style.right = "0px";
    })
    document.querySelector('.close').addEventListener("click", function(){
        nav.style.right = "-200px";
    })
    /*document.querySelector('.anchors').addEventListener("click", function(){
        nav.style.right = "-200px";
    })*/
    const anchors = document.querySelectorAll('.anchors');
    for (let i = 0; i < anchors.length; i++){
        anchors[i].addEventListener("click", function(){
            nav.style.right = "-200px";
        })
    }
}

burgerFunction();