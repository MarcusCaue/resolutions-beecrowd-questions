const arq = require("fs").readFileSync('/dev/stdin', 'utf8')
const dados = arq.split("\n")

let linha = 0
while (true) {
  let primeiraLinha = dados[linha]
  
  if (primeiraLinha === undefined || primeiraLinha === "") break
  
  // Quantidade de Atributos
  let numAtributos = parseInt(primeiraLinha)
  linha++

  // Quantidade de cartas dos Baralhos
  let [ quantCartasMarcos, quantCartasLeo ] = dados[linha].split(" ").map(valor => parseInt(valor))
  linha++

  // Baralhos
  let baralhoMarcos = []; let baralhoLeo = [];

  // Baralho de Marcos
  for (let i = 0; i < quantCartasMarcos; i++) {
    let cartaMarcos = dados[linha].split(" ").map(valor => parseInt(valor))
    baralhoMarcos.push(cartaMarcos)
    linha++
  }

  // Baralho de Leo
  for (let i = 0; i < quantCartasLeo; i++) {
    let cartaLeo = dados[linha].split(" ").map(valor => parseInt(valor))
    baralhoLeo.push(cartaLeo)
    linha++
  }

  // Carta Escolhida por Marcos e Leo
  // Obs.: as numerações das cartas começam em 1
  let [ cartaEscolhidaMarcos, cartaEscolhidaLeo ] = dados[linha].split(" ").map(valor => parseInt(valor) - 1)
  linha++

  // Atributo Escolhido -> cuja numeração também começa em 1
  let atributoEscolhido = parseInt(dados[linha]) - 1
  linha++

  // Determinando o vencedor
  cartaEscolhidaMarcos = baralhoMarcos[cartaEscolhidaMarcos][atributoEscolhido]
  cartaEscolhidaLeo = baralhoLeo[cartaEscolhidaLeo][atributoEscolhido]

  if (cartaEscolhidaMarcos > cartaEscolhidaLeo) {
    console.log("Marcos")
  } else if (cartaEscolhidaLeo > cartaEscolhidaMarcos) {
    console.log("Leonardo")
  } else {
    console.log("Empate")
  }
}