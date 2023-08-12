function bubbleSort(array: number[]) {
  let quantTrocas = 0
  let tamanhoArray = array.length
  let i = 0, j = 1

  while (i < tamanhoArray) {
    let numI = array[i]
    let numJ = array[j]

    while (j < tamanhoArray) {
      if (numI > numJ) {
        array[i] = numJ
        array[j] = numI
        quantTrocas++
      }

      i++; j++
      numI = array[i]
      numJ = array[j]
    }

    tamanhoArray--
    i = 0; j = 1
  }

  return quantTrocas
}

const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines: string[] = input.split("\n")

let indexLine = 0
const qCasosTeste = parseInt(lines[indexLine++])

for (let i = 0; i < qCasosTeste; i++) {
  indexLine++
  const ordemVagoes = lines[indexLine++].split(" ").map(v => parseInt(v))
  const quantTrocas = bubbleSort(ordemVagoes)
  console.log(`Optimal train swapping takes ${quantTrocas} swaps.`)
}