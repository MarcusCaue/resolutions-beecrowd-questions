const arq = require("fs").readFileSync('/dev/stdin', 'utf8');

const dados = arq.split("\n")

// Alimentação da Matriz
let indexOnDados = 1
const matriz = []
for (let i = 0; i < 12; i++) {
  let valoresLinha = []
  for (let j = 0; j < 12; j++) {
    valoresLinha.push(parseFloat(dados[indexOnDados]))
    indexOnDados++
  }
  matriz.push(valoresLinha)
}

const operacao = dados[0]

let somatorio = 0
for (let i = 1; i < 12; i++) {
  for (let j = 0; j < i; j++) {
    somatorio += matriz[i][j]
  }
}

const resultado = operacao === "S" ? somatorio : (somatorio / 66)

console.log(resultado.toFixed(1))