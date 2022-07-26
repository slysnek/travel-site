const loginButton = document.querySelector('.login');
const popup = document.querySelector('.pop-up');
const email = document.querySelector('.pop-up-input')
const password = document.querySelector('.password')
const signInButton = document.querySelector('.sign-in');

loginButton.addEventListener('click',() => {
    popup.classList.toggle('hidden')
})

popup.addEventListener(('click'), (event) =>{
    if(event.target.classList.contains('pop-up')){
        popup.classList.toggle('hidden')
    }
})

signInButton.addEventListener('click', () =>{
    let userEmail = document.querySelector('.pop-up-input').value;
    let userPassword = password.value;
    alert(`Your Email: ${userEmail}\nYour Password: ${userPassword}`)
})


