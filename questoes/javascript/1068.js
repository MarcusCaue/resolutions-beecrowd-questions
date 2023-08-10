const arq = require("fs").readFileSync("/dev/stdin", "utf8")
const dados = arq.split("\n")

let linha = 0
while (true) {
  let dadoLinha = dados[linha]
  linha++

  if (dadoLinha === "" || dadoLinha === undefined) 
    break
  
  const parenteses = []
  let feedback = ""
  
  for (let char of dadoLinha.split("")) {
    if (char === "(") {
      parenteses.push("(")
    } else if (char === ")") {
      if (parenteses.length === 0) {
        feedback = "incorrect"
        break
      }
      parenteses.pop()
    }
  }

  if (parenteses.length === 0 && feedback !== "incorrect") {
    feedback = "correct"
  } else {
    feedback = "incorrect"
  }

  console.log(feedback)
}