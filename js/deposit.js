document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  const prevDepositTotal = getTextElementValueById("deposit-total");

  //   Calculate Total Deposit
  const newDepositTotal = prevDepositTotal + newDepositAmount;
  //   Set Total Deposit Value
  setTextElementValueById("deposit-total", newDepositTotal);

  //   Get previous balance
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  //   Set new Balance
  setTextElementValueById("balance-total", newBalanceTotal);
});
