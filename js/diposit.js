document.getElementById('submit-deposit').addEventListener('click', function (event){

    // Step-1 : get filed input
    const depositField = document.getElementById('user-deposit');
    const depositFieldString = depositField.value;
    const depositFieldAmount = parseFloat(depositFieldString);
    // Step-2 : get deposit info form htmltext

    const depositTotalElement = document.getElementById('deposit');
    const depositTotalElementString = depositTotalElement.innerText;
    const depositTotalAmount = parseFloat(depositTotalElementString);

    // Step: 3 : Add value to depositTotalAmount;
    // step: 4
    
        // Step-2 : get deposit info form htmltext

        const balanceTotalElement = document.getElementById('balance');
        const balanceTotalElementString = balanceTotalElement.innerText;
        const balanceTotalAmount = parseFloat(balanceTotalElementString);
        depositField.value = ' ';

    if(isNaN(depositFieldAmount)){
        alert("Please enter a valid amount");
       
        return;
    } else{
         // calculate total dipsit 
    const currentDipositAmount  = depositFieldAmount + depositTotalAmount; 
     // add total Diposit 
    depositTotalElement.innerText = currentDipositAmount;
    // calculate total Balance 
    const currentBalanceAmount  = depositFieldAmount + balanceTotalAmount;
    // add total Balance 
    balanceTotalElement.innerText = currentBalanceAmount;
        }


});