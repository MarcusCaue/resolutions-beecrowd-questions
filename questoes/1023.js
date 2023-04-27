// Deu Memory-Limit

const arq = require("fs").readFileSync(__dirname + "/stdin", "utf8")
const dados = arq.split("\n")

let linha = 0, numCidade = 1
while (true) {

  if (dados[linha] === "0") {
    break
  }

  let quantImoveis = parseInt(dados[linha])
  linha++

  let dadosImoveis = [], consumoTotal = 0, totalPessoas = 0
  for (let i = 0; i < quantImoveis; i++) {
    let [ quantPessoas, consumoImovel ] = dados[linha].split(" ").map(valor => parseFloat(valor))

    totalPessoas += quantPessoas
    consumoTotal += consumoImovel

    dadosImoveis.push({
      quantPessoas,
      consumoImovel,
      consumoPorPessoa: Math.floor(consumoImovel / quantPessoas)
    })

    linha++
  }

  let consumoMedioCidade = (consumoTotal / totalPessoas).toString()
  consumoMedioCidade = consumoMedioCidade.includes(".") ? consumoMedioCidade.substring(0, consumoMedioCidade.indexOf(".") + 3) : consumoMedioCidade + ".00"
  
  console.log(`Cidade# ${numCidade}:`)
  
  let consumoPorPessoaImovel = ""
  dadosImoveis = dadosImoveis.sort((a, b) => a.consumoPorPessoa - b.consumoPorPessoa)
  dadosImoveis.forEach((imovel) => {
    consumoPorPessoaImovel += `${imovel.quantPessoas}-${imovel.consumoPorPessoa} `
  })
  console.log(consumoPorPessoaImovel.trimEnd())

  console.log(`Consumo medio: ${consumoMedioCidade} m3.`)

  numCidade++
}