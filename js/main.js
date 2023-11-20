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

// FAQ page
const faqBtns = document.querySelectorAll(".faq-fi");
const faqBodys = document.querySelectorAll(".faq-body");
const faqBtn = document.querySelector(".faq-fi");
const faqBody = document.querySelector(".faq-body");

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

faqBtns.forEach(faqBtn => {
        faqBtn.addEventListener("click", () => {
            faqBodys.forEach(faqBody => {
                if (faqBody.style.display == "none") {
                    faqBtn.style.transform = "rotate(90deg)";
                    faqBody.style.display = "block";
            } else {
                    faqBtn.style.transform = "rotate(45deg)";
                    faqBody.style.display = "none";
            }
            })
    })
})
