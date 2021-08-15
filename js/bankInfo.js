//handle deposite button
document.getElementById("deposite-button").addEventListener("click", function(){
    const depositeInput = document.getElementById("deposite-input");
    const depositeAmount = depositeInput.value;
    const depositeAmountFloat = parseFloat(depositeAmount);

    const depositeCurrent = document.getElementById("deposite-total");
    const currentDepositeAmount = depositeCurrent.innerText;
    const currentDepositeFloat = parseFloat(currentDepositeAmount);

    const newDepositeTotal = parseFloat(currentDepositeFloat + depositeAmountFloat);
    //const 
    depositeCurrent.innerText = parseFloat(newDepositeTotal);

    //clear the deposite input field
    depositeInput.value = "";

    //update account balance
    const balanceTotal =  document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + depositeAmountFloat;
    balanceTotal.innerText = newBalanceTotal;

})

//handle withdraw button
document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmount = withdrawInput.value;
    const withdrawAmountFloat = parseFloat(withdrawAmount);

    const withdrawCurrent = document.getElementById("Withdraw-total");
    const currentwithdrawAmount = withdrawCurrent.innerText;
    const currentwithdrawFloat = parseFloat(currentwithdrawAmount);

    const newWithdrawTotal = parseFloat(currentwithdrawFloat + withdrawAmountFloat);
    //const 
    withdrawCurrent.innerText = parseFloat(newWithdrawTotal);

    //clear the deposite input field
    withdrawInput.value = "";

    //update account balance
    const balanceTotal2 =  document.getElementById("balance-total");

    const balanceTotalText = balanceTotal2.innerText;
    const previousBalanceTotal2 = parseFloat(balanceTotalText);
    const newBalanceTotal2 = previousBalanceTotal2 - withdrawAmountFloat;
    balanceTotal2.innerText = newBalanceTotal2;

})

