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

// Slider Same Products 

const prevBtn = document.querySelector('.slider-prev-btn');
const nextBtn = document.querySelector('.slider-next-btn');
const cardsWrapper = document.querySelector('.same-products-cards');
const cardWidth = document.querySelector('.same-product-card').offsetWidth;
const slideOffset = 325; // Увеличиваем значение на 200 пикселей (подставьте нужное значение)
let currentPosition = 0;


// Функция для переключения слайдов влево
const slideLeft = () => {
  if (currentPosition < 0) {
    currentPosition += slideOffset; // Изменяем значение на slideOffset
    if (currentPosition > 0) {
      currentPosition = 0;
    }
    cardsWrapper.style.transform = `translateX(${currentPosition}px)`;
  }
};

// Функция для переключения слайдов вправо
const slideRight = () => {
  const maxPosition = -(cardsWrapper.scrollWidth - cardsWrapper.offsetWidth);
  if (currentPosition > maxPosition) {
    currentPosition -= slideOffset; // Изменяем значение на slideOffset
    if (currentPosition < maxPosition) {
      currentPosition = maxPosition;
    }
    cardsWrapper.style.transform = `translateX(${currentPosition}px)`;
  }
};

// Обработчики событий для кнопок
prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);

const checkboxes = document.querySelectorAll('.fi-rr-square');
const productList = document.querySelector('.product-list');
const finalPrice = document.querySelector('.final-price b');
let totalPrice = 40.00;

// Объект для хранения информации о продуктах
const products = {
  "Праздничная упаковка": {
    price: '€4.00',
    name: 'Праздничная упаковка'
  },
  "Золотые блестки": {
    price: '€2.60',
    name: 'Золотые блестки'
  },
  "Rafaello в букете": {
    price: '€8.50',
    name: 'Rafaello в букете'
  },
  "Шарики": {
    price: '€6.00',
    name: 'Шарики'
  },
  // Другие продукты
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', function() {
    const parentLabel = this.parentElement;
    const associatedCheckbox = parentLabel.querySelector('.hidden-checkbox');
    const labelContent = parentLabel.textContent.trim();

    if (associatedCheckbox) {
      const productData = products[labelContent];
      if (!productData) return; // Проверка наличия информации о продукте

      if (this.classList.contains('fi-rr-square')) {
        this.classList.remove('fi-rr-square');
        this.classList.add('fi-rr-checkbox');
        associatedCheckbox.checked = false; // Снимаем checked

        // Добавляем продукт в product-list
        const productName = document.createElement('span');
        productName.classList.add('product-name');
        productName.setAttribute('data-name', productData.name);
        productName.textContent = productData.name;

        const productPrice = document.createElement('span');
        productPrice.classList.add('product-price');
        productPrice.textContent = productData.price;

        productList.appendChild(productName);
        productList.appendChild(productPrice);

        totalPrice += parseFloat(productData.price.replace('€', ''));
        finalPrice.textContent = `€${totalPrice.toFixed(2)}`;
      } else {
        this.classList.remove('fi-rr-checkbox');
        this.classList.add('fi-rr-square');
        associatedCheckbox.checked = true; // Устанавливаем checked

        // Удаляем продукт из product-list
        const productToRemove = productList.querySelector(`.product-name[data-name="${productData.name}"]`);
        if (productToRemove) {
          const productPrice = productToRemove.nextElementSibling;
          productList.removeChild(productToRemove);
          productList.removeChild(productPrice);

          totalPrice -= parseFloat(productData.price.replace('€', ''));
          finalPrice.textContent = `€${totalPrice.toFixed(2)}`;
        }
      }
    }
  });
});
