const modalElement = document.querySelector('.modal-login-container')
const loginElement = document.querySelector('.modal-login')
const resetElement = document.querySelector('.modal-reset')
const modalMenuElement = document.querySelector('.modal-menu')


function showModal() {
  if (modalElement.className == 'modal-login-container') {
    modalElement.className = 'modal-login-container show-modal'
  } else {
    modalElement.className = 'modal-login-container'
  }
}

function changeContent() {
  if (loginElement.className == 'modal-login' && resetElement.className == 'modal-reset disabled') {
    loginElement.className = 'modal-login disabled'
    resetElement.className = 'modal-reset'
  } else {
    loginElement.className = 'modal-login'
    resetElement.className = 'modal-reset disabled'
  }
}

function modalMenu() {
  if(modalMenuElement.className == 'modal-menu') {
    modalMenuElement.className = 'modal-menu disabled'
  } else {
    modalMenuElement.className = 'modal-menu'
  }
}
 