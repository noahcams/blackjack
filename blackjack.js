/** Calculates how many hands you'll lose in a row before going broke based on your bankroll and minimum bet using
 * the Martingale betting system */
const handsTillBroke = (bankRoll, minBet) => {
  if (!bankRoll || !minBet || typeof bankRoll !== 'number' || typeof minBet !== 'number') {
    console.error('Improper inputs');
    return 0;
  }
  let numHands = 0;
  let currBet = minBet;
  let currBankRoll = bankRoll;
  while (currBet <= currBankRoll) {
    currBankRoll -= currBet;
    currBet *= 2;
    numHands++;
  }
  return numHands;
}

console.assert(handsTillBroke(10, 1) === 3);
console.log(handsTillBroke(1000, 1));
