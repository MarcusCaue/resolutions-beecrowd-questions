const input = require("fs").readFileSync("./dev/stdin", "utf8")
const lines: string[] = input.split("\n")

let indexLine = 0

interface FunctionsParams {
  n1: number, d1: number, n2: number, d2: number
}

interface Calculadora {
  "sum": (params: FunctionsParams) => string,
  "sub": (params: FunctionsParams) => string,
  "mult": (params: FunctionsParams) => string,
  "div": (params: FunctionsParams) => string
}

const calculadora: Calculadora = {
  "sum": ({ n1, n2, d1, d2 }: FunctionsParams) => `${(n1 * d2 + n2 * d1)}/${(d1 * d2)}`,
  "sub": ({ n1, n2, d1, d2 }: FunctionsParams) => `${(n1 * d2 - n2 * d1)}/${(d1 * d2)}`,
  "mult": ({ n1, n2, d1, d2 }: FunctionsParams) => `${(n1 * n2)}/${(d1 * d2)}`,
  "div": ({ n1, n2, d1, d2 }: FunctionsParams) => `${(n1 * d2)}/${(n2 * d1)}`,
}

function simplificadorDeFracao(fracao: string) {
  const [n1, n2] = fracao.split("/").map(digit => parseInt(digit))

  const menorValor = (n1 < n2) ? n1 : n2

  let mdc = Math.abs(menorValor)
  for (let i = mdc; i > 0; i--) {
    if ((n1 % i === 0) && (n2 % i === 0)) {
      mdc = i
      break
    }
  }

  const result = (menorValor < 0) ? `-${Math.abs(n1 / mdc)}/${Math.abs(n2 / mdc)}` : `${Math.abs(n1 / mdc)}/${Math.abs(n2 / mdc)}`

  return result
}

while (true) {
  const leitura = lines[indexLine++]
  if (leitura === undefined)
    break

  const qCasosTeste = parseInt(leitura)
  for (let i = 0; i < qCasosTeste; i++) {
    const expressao = lines[indexLine++]

    let pedacosConta = expressao.split(/[\s]/).filter(pedaco => pedaco !== "")
    const n1 = Number(pedacosConta[0])
    const d1 = Number(pedacosConta[2])
    const n2 = Number(pedacosConta[4])
    const d2 = Number(pedacosConta[6])
    const operacao = pedacosConta[3]

    let fracaoResultante: string = ""

    switch (operacao) {
      case "+":
        fracaoResultante = calculadora.sum({ n1, d1, n2, d2 })
        break
      case "-":
        fracaoResultante = calculadora.sub({ n1, d1, n2, d2 })
        break
      case "*":
        fracaoResultante = calculadora.mult({ n1, d1, n2, d2 })
        break
      case "/":
        fracaoResultante = calculadora.div({ n1, d1, n2, d2 })
        break
    }

    const fracaoSimplificada = simplificadorDeFracao(fracaoResultante)

    console.log(`${fracaoResultante} = ${fracaoSimplificada}`);
  }

}