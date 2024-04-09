import { IMC, notIsANumber, displayMessage } from "./utils.js"
import { errorMsg } from "./alert-error.js"

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const form = document.querySelector('form')

form.onsubmit = handleClick


function handleClick(e) {
  e.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  
  const errorAlert = notIsANumber(weight) || notIsANumber(height)
  if(errorAlert) {
    errorMsg.open()
    return
  }
  errorMsg.close()
  
  const result = IMC(weight, height)
  displayMessage(result)
}

inputWeight.oninput = () => {errorMsg.close()}
inputHeight.oninput = () => {errorMsg.close()}