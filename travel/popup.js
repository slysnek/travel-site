const loginButton = document.querySelector('.login');
const popup = document.querySelector('.pop-up');
const email = document.querySelector('.pop-up-input')
const password = document.querySelector('.password')
const signInButton = document.querySelector('.sign-in');
const account = document.getElementById('account');
const register = document.querySelector('.reg')

account.addEventListener('click',() => {
    popup.classList.toggle('hidden')
})

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

register.addEventListener('click', () => {
    document.querySelector('.facebook').classList.toggle('non-visible');
    document.querySelector('.google').classList.toggle('non-visible');
    document.querySelector('.or-breaks').classList.toggle('non-visible');
    document.querySelector('.forgot-password').classList.toggle('non-visible');
    document.querySelector('.pop-up-content').classList.toggle('small-pop-up');
    if(document.querySelector('h4').innerHTML === 'Create account'){
        document.querySelector('h4').innerHTML = 'Log in to your account'
    } else {
        document.querySelector('h4').innerHTML = 'Create account'
    }
    if(document.querySelector('.sign-in').innerHTML === 'Sign Up'){
        document.querySelector('.sign-in').innerHTML = 'Sign in';
    } else {
        document.querySelector('.sign-in').innerHTML = 'Sign Up';
    }
    if(document.querySelector('.account-none').innerHTML === 'Already have an account?'){
        document.querySelector('.account-none').innerHTML = "Don't have an account?";
    }else{
        document.querySelector('.account-none').innerHTML = 'Already have an account?';
    }
    if(document.querySelector('.reg').innerHTML === 'Log in'){
        document.querySelector('.reg').innerHTML = 'Register';
    } else{
        document.querySelector('.reg').innerHTML = 'Log in';
    }
    
})
