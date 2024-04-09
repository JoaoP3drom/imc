import { Modal } from "./modal.js"

function IMC(weight, height) {
  return (weight / ((height/100) ** 2)).toFixed(2)
}

function notIsANumber(value) {
  return isNaN(value) || value == ''
}

function displayMessage(result) {
  const message = `seu IMC é de ${result}`
  Modal.innerText.innerText = message
  Modal.open()
}

export { IMC, notIsANumber, displayMessage }
