const input = require("fs").readFileSync("./dev/stdin", "utf8")
const lines: string[] = input.split("\n")

let indexLine = 0

while (true) {
  let qCards = parseInt(lines[indexLine])

  if (qCards === 0)
    break
  
  indexLine++

  const cardsStack = []
  for (let i = 1; i < qCards+1; i++) {
    cardsStack.push(i)
  }

  const queueDiscardedCards = []
  while (cardsStack.length >= 2) {
    const discardedCard = cardsStack.shift()
    queueDiscardedCards.push(discardedCard)

    const nextCardOnBase = cardsStack.shift()
    cardsStack.push(nextCardOnBase)
  }

  console.log(`Discarded cards: ${queueDiscardedCards.join(", ")}`);
  console.log(`Remaining card: ${cardsStack[0]}`);
}