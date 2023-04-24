const arq = require("fs").readFileSync("/dev/stdin", "utf8")
const dados = arq.split("\n").map(valor => valor.trim())

// Cada índice do array (que é um número) está relacionado à quantidade de leds que o número que representa esse índice contém. Sendo assim:
// 0 => 6; 1 => 2, 2 => 5 etc...
const quantLedsForNumber = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]

let linha = 0
let quantCasosTeste = parseInt(dados[linha])
linha++

for (let i = 0; i < quantCasosTeste; i++) {
  let numero =  dados[linha].split("")

  let quantLeds = 0 
  
  numero.forEach(numberChar => {
    quantLeds += quantLedsForNumber[parseInt(numberChar)] 
  })
  
  linha++

  console.log(quantLeds + " leds")
}