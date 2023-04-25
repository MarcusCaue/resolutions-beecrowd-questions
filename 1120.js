const arq = require("fs").readFileSync("/dev/stdin", "utf8")
const dados = arq.split("\n")

let linha = 0
while (true) {
  let dadoLinha = dados[linha]

  if (dadoLinha === "0 0") {
    break
  }

  linha++

  let [ digitoProblematico, valorOriginalNegociado ] = dadoLinha.split(" ")

  let charToBeRemoved = RegExp(digitoProblematico, "g")

  valorOriginalNegociado = valorOriginalNegociado.trim().replace(charToBeRemoved, "")
  valorOriginalNegociado = valorOriginalNegociado === "" ? 0 : BigInt(valorOriginalNegociado).toString(10) 

  console.log(valorOriginalNegociado)
}