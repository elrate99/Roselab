"use strict";
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
const faqHeaders = document.querySelectorAll(".faq-header");


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


/* faqBtns.forEach(faqBtn => {
        faqBtn.addEventListener("click", () => {
            faqBodys.forEach(faqBody => {
                if (faqBody.style.display == "none") {
                    faqBtn.style.transform = "rotate(90deg)";
                    faqBtn.classList.add('animate-me')
                    faqBody.style.display = "block";
                    faqBody.classList.add('faq-anim');
            } else {
                faqBtn.style.transform = "rotate(45deg)";
                    faqBody.style.display = "none";    
            }
        })
    })
}) */

faqBtns.forEach((faqBtn, faqBtnKey) => {
    faqBodys.forEach(faqBody => {
        faqBody.style.maxHeight = "0px";
    });
    faqBtn.addEventListener("click", function() {
        if (faqBodys[faqBtnKey].style.maxHeight == "0px") {
          this.style.transform = "rotate(0deg)";
          faqBodys[faqBtnKey].style.maxHeight = "150px";
          setTimeout(() => {
            faqHeaders[faqBtnKey].classList.add('faq-header-open');
        }, 200); // add the class
        } else {
          this.style.transform = "rotate(45deg)";
          faqBodys[faqBtnKey].style.maxHeight = "0px";
          setTimeout(() => {
            faqHeaders[faqBtnKey].classList.remove('faq-header-open');
        }, 1000); // remove the class
        }
    })
})
