const signupForm =document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password =signupForm['signup-password'].value;

    auth.createUserWithEmailAndßPassword(email, password).then(cred =>{
    const modal = document.querySelector.querySelector('#modal-signup');
    M.modal.getInstance(modal).close();
    signupForm.reset();
    })



})