const btn = document.querySelector('.j-btn-test');
// размер экрана:
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
// размер вьюпорта:
const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;

btn.addEventListener('click', () => {
   window.location.reload(); //обновить страницу
   
   alert(`Ширина Вашего экрана ${screenWidth}, высота Вашего экрана ${screenHeight}.`),
   alert(`Ширина Вашего viewport ${windowInnerWidth}, высота Вашего viewport ${windowInnerHeight}.`);
});