export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  btnClose: document.querySelector('.close'),
  innerText: document.querySelector('.modal h2'),

  open() {Modal.wrapper.classList.add('open')},
  close() {Modal.wrapper.classList.remove('open')}
}

Modal.btnClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(e) {
  if(e.key == 'Escape') {Modal.close()}
}