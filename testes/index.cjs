const arq = require("fs").readFileSync("./stdin", "utf8")
const dados = arq.split("\n")

let linha = 0
while (true) {
  let dadoLinha = dados[linha]
  linha++

  if (dadoLinha === "0 0") 
    break
  
  let [ digitoProblematico, valorOriginalNegociado ] = dadoLinha.split(" ")
  let charToBeRemoved = RegExp(digitoProblematico, "g")

  valorOriginalNegociado = valorOriginalNegociado.trim().replace(charToBeRemoved, "")
  
  if (valorOriginalNegociado === "") {
    valorOriginalNegociado = "0"
  } else {
    let indexOfFirstCharDiffZero = valorOriginalNegociado.search(/[1-9]/)

    if (indexOfFirstCharDiffZero === -1) {
      valorOriginalNegociado = "0"
    } else {
      valorOriginalNegociado = valorOriginalNegociado.substring(indexOfFirstCharDiffZero)
    }
  }
  console.log(valorOriginalNegociado)
}