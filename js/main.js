const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navPanel = document.getElementById('nav-panel');
const over = document.querySelector('.overlay');
const modalWrapper = document.querySelector('.modal-wrapper');
const userPanel = document.getElementById('user-panel');

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