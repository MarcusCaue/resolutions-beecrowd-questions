const input = require("fs").readFileSync("./dev/stdin", "utf8")
const lines: string[] = input.split("\n")
let indexLine = 0

const qCasosTeste = parseInt(lines[indexLine])
indexLine++

for (let i = 0; i < qCasosTeste; i++) {
  const diamantesAreia = lines[indexLine]
  indexLine++

  let diamantes = 0

  const pedacosDiamantes: string[] = []

  diamantesAreia.split("").forEach(char => {
    if (char === "<") {
      pedacosDiamantes.push("<")
    } else if (char === ">") {
      if (pedacosDiamantes.pop() !== undefined) {
        diamantes++
      }
    }
  })

  console.log(diamantes);
}