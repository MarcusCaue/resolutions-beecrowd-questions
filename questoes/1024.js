const arq = require("fs").readFileSync("/dev/stdin", "utf8")
const dados = arq.split("\n").map(valor => valor.trim())

function stepThreePositionsTableAscII(message) {
  let newMessage = message.split("").map(char => {

    if (/[A-z]/.test(char)) {
      let asciiCode = char.charCodeAt(0)
      asciiCode += 3
      return String.fromCodePoint(asciiCode)
    }

    return char
  })

  return newMessage.join("")
}

function reverseString(message) {
  let newMessage = message.split("").reverse()

  return newMessage.join("")
}

function stepOnePositionToLeftTableAscII(message) {
  let meioString = message.length / 2
  let newMessage = message.substring(meioString).split("").map(char => {

    let asciiCode = char.charCodeAt(0)
    asciiCode--
    return String.fromCodePoint(asciiCode)

  }).join("")

  newMessage = message.substring(0, meioString) + newMessage

  return newMessage
}

let linha = 0
const quantCasosTeste = parseInt(dados[linha])
linha++

for (let i = 0; i < quantCasosTeste; i++) {
  let message = dados[linha]
  linha++
  
  let primeiraPassada = stepThreePositionsTableAscII(message)
  let segundaPassada = reverseString(primeiraPassada)
  let terceiraPassada = stepOnePositionToLeftTableAscII(segundaPassada)
  
  console.log(terceiraPassada)
}
