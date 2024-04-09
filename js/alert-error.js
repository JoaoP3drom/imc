export const errorMsg = {
  element: document.querySelector('.alert-error'),
  open() {errorMsg.element.classList.add('open')},
  close() {errorMsg.element.classList.remove('open')},
}