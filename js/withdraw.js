/**
 * 1. Add withdraw button event handler
 * 2. Get withdraw amount by using getInputFieldValueById function
 * 3. Get previous withdraw amount by using getTextElementValueById function
 * 4. Calculate new withdraw total and set the value
 * 4.5 Set new withdraw total amount by using setTextElementValueById
 * 5. Get previous balance total
 * 6. Calculate new balance total
 * 7. Set new balance total
 */
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawAmount = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
