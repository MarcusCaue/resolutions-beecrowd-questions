const input = require("fs").readFileSync("./dev/stdin", "utf8")
const lines: string[] = input.split("\n")

let indexLine = 0

function preencheArray(length: number) {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(`${i} -> \\`)
  }
  return array
}

while (true) {
  let leitura: string | undefined = lines[indexLine++]
  if (leitura === undefined) {
    break
  }

  const qCasosTeste = parseInt(leitura)

  for (let i = 0; i < qCasosTeste; i++) {
    const [qEnderecosBase, qChavesArmazenar] = lines[indexLine++].split(" ").map(valor => parseInt(valor))
    const chaves = lines[indexLine++].split(" ").map(valor => parseInt(valor))
    
    const mapeamento = preencheArray(qEnderecosBase)

    for (let i = 0; i < qChavesArmazenar; i++) {
      const index = chaves[i] % qEnderecosBase
      mapeamento[index] = mapeamento[index].replace("\\", `${chaves[i]} -> \\`)
    }

    mapeamento.forEach(valor => console.log(valor))
    lines[indexLine + 1] !== undefined && console.log();
  }  
}