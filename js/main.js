const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navPanel = document.getElementById('nav-panel');
const over = document.querySelector('.overlay');
const modalWrapper = document.querySelector('.modal-wrapper');
const userPanel = document.getElementById('user-panel');
const inputAuth = document.querySelector('.input100');
const signUpLink = document.querySelector(".txt2");
const signInLink = document.querySelector(".txt3");
const signInAuth = document.querySelector(".auth-popup");
const signUpAuth = document.querySelector(".sign-popup");

menuBtn.addEventListener("click", () => {
    navPanel.style.display = 'flex';
})

closeBtn.addEventListener("click", () => {
    navPanel.style.display = 'none';
});

over.addEventListener("click", () => {
    modalWrapper.style.display = 'none';
});

userPanel.addEventListener("click", () => {
    modalWrapper.style.display = "flex";
})

signUpLink.addEventListener("click", (e) => {
    e.preventDefault();
    signInAuth.style.display = 'none';
    signUpAuth.style.display = "block";
})

signInLink.addEventListener("click", (e) => {
    e.preventDefault();
    signUpAuth.style.display = 'none';
    signInAuth.style.display = "block";
})