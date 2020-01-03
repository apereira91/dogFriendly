(function() {
    const config ={
        apiKey: "AIzaSyDYiu2-6-2AEoKHICJav0E6O6evKIm4VQo",
        authDomain: "dog-friendly-website.firebaseapp.com",
        databaseURL: "https://dog-friendly-website.firebaseio.com",
        projectId: "dog-friendly-website",
        storageBucket: "dog-friendly-website.appspot.com",
        messagingSenderId: "529353649569",
        appId: "1:529353649569:web:044196ff754e49898aafe0",
        measurementId: "G-BLST5CJM12"
      };
    firebase.initializeApp(config);

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnLogout');
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {
        const email =txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    btnLogin.addEventListener('click', e => {
        const email =txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.createUSerWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    btnSignup.addEventListener('click', e => {
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    })
});