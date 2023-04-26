const arq = require("fs").readFileSync(__dirname + "/stdin", "utf8")
const dados = arq.split("\n")

let linha = 0