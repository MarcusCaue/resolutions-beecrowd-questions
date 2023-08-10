const arq = require("fs").readFileSync('/dev/stdin', 'utf8');

const dados = arq.split("\n")

const colunaEscolhida = parseInt(dados[0])
const operacao = dados[1]

// Alimentação da Matriz
let indexOnDados = 2
const matriz = []
for (let i = 0; i < 12; i++) {
  let valoresLinha = []
  for (let j = 0; j < 12; j++) {
    valoresLinha.push(parseInt(dados[indexOnDados]))
    indexOnDados++
  }
  matriz.push(valoresLinha)
}

let somatorio = 0
for (let i = 0; i < 12; i++) {
  somatorio += matriz[i][colunaEscolhida]
}

const resultado = operacao === "S" ? somatorio : somatorio / 12

console.log(resultado.toFixed(1))