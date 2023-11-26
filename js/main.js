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

const prevButton = document.querySelector('.slider-prev-btn');
const nextButton = document.querySelector('.slider-next-btn');

// Получаем контейнер с карточками и список всех карточек
const cardsWrapper = document.querySelector('.same-products-cards-wrapper');
const cards = document.querySelector('.same-products-cards');
const cardItems = document.querySelectorAll('.same-product-card');

// Определяем ширину одной карточки
const cardWidth = cardItems[0].offsetWidth; // Ширина первой карточки

// Определяем видимое количество карточек
const visibleItems = 4;

// Инициализируем текущий индекс
let currentIndex = 0;

// Функция для скрытия карточек
const hideCards = () => {
  cardItems.forEach((item, index) => {
    if (index < currentIndex || index >= currentIndex + visibleItems) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });
};

// Обработчик клика на стрелку "вправо"
nextButton.addEventListener('click', () => {
  if (currentIndex + visibleItems < cardItems.length) {
    currentIndex++;
    cardsWrapper.scrollLeft += cardWidth;
    hideCards();
  }
  // Показываем стрелку "влево" после нажатия на стрелку "вправо"
  prevButton.style.display = 'block';
});

// Обработчик клика на стрелку "влево"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    cardsWrapper.scrollLeft -= cardWidth;
    hideCards();
  }
  // Проверяем, скрыта ли крайняя левая карточка, если да - скрываем стрелку "влево"
  if (currentIndex === 0) {
    prevButton.style.display = 'none';
  }
});

// Проверяем положение прокрутки и показываем/скрываем стрелки при необходимости
cardsWrapper.addEventListener('scroll', () => {
  const scrollOffset = cardsWrapper.scrollLeft;
  const maxScroll = cards.scrollWidth - cardsWrapper.clientWidth;

  prevButton.style.display = scrollOffset <= 0 ? 'none' : 'block';
  nextButton.style.display = scrollOffset >= maxScroll ? 'none' : 'block';
});

// Инициализация начального состояния
hideCards();