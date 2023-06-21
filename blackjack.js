/** Calculates how many hands you'll lose in a row before going broke based on your bankroll and minimum bet using
 * the Martingale betting system. Also tells you how much you'll have leftover at the end. */
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
  return `Hands till broke: ${numHands}\nAmount leftover: ${currBankRoll}`;
};

/** calculates the bankroll needed to lose the given number of hands in a row starting with the minimum bet */
const bankrollSizeNeeded = (numHands, minBet) => {};

// ----------------------------- Tests and output ----------------------------------- //
console.assert(handsTillBroke(10, 1) === 'Hands till broke: 3\nAmount leftover: 3');
console.log(handsTillBroke(10000, 1));
