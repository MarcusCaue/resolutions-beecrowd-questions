const arq = require("fs").readFileSync('/dev/stdin', 'utf8');

const [ ponto1, ponto2 ] = arq.split("\n").map(valor => {
  let organizandoValor = valor.trim().split(" ")
  let coordenadasPontoNumber = organizandoValor.map(valorString => {
    return parseFloat(valorString)
  })
  return coordenadasPontoNumber
})

const raizQuadrada = Math.sqrt
const potencia2 = Math.pow

const distancia = raizQuadrada(
  potencia2(ponto2[0] - ponto1[0], 2) +
  potencia2(ponto2[1] - ponto1[1], 2)
)

console.log(distancia.toFixed(4));