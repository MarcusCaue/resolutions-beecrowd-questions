const arq = require("fs").readFileSync(__dirname + "/stdin", "utf8")
const dados = arq.split("\n")

let linha = 0
while (true) {

  if (dados[linha] === "" || dados[linha] === undefined) {
    break
  }

  let [ n1, n2 ] = dados[linha].trim().split(" ").map(valor => (valor >>> 0).toString(2))
  linha++

  if (n1.length > n2.length) {
    n2 = n2.padStart(n1.length, "0")
  } else if (n2.length > n1.length) {
    n1 = n1.padStart(n2.length, "0")
  }

  let n3 = ""
  for (let i = 0; i < n1.length; i++) {
    let charN1 = n1.charAt(i)
    let charN2 = n2.charAt(i)

    n3 += charN1 === charN2 ? "0" : "1"
  }

  console.log(parseInt(n3, 2))

}