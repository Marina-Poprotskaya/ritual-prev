const modalButton = document.getElementById('button-modal');
const form = document.querySelector('.modal__form');
const closeButton = document.querySelector('.modal__close');
const modal = document.querySelector('.modal')

modalButton.addEventListener('click', doOrder);

function doOrder() {
  modal.classList.add('active');
}

function sendOrder(e) {
  e.preventDefault();
  modal.classList.remove('active');
  form.reset();
}

form.addEventListener('submit', sendOrder);
closeButton.addEventListener('click', sendOrder);