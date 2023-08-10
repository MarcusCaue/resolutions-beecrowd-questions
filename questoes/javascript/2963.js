const arq = require("fs").readFileSync("/dev/stdin", "utf8")
const dados = arq.split("\n")

let linha = 0
let quantCandidatos = parseInt(dados[linha])
linha++

let quantVotosCarlos = parseInt(dados[linha])
linha++

let maiorQuantVotos = quantVotosCarlos
for (var i = 1; i < quantCandidatos; i++) {
  let quantVotos = parseInt(dados[linha])
  linha++

  if (quantVotos > maiorQuantVotos) 
    break
}

if (i === quantCandidatos) {
  console.log("S")
} else {
  console.log("N")
}