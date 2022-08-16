document
	.getElementById("submit-withdraw")
	.addEventListener("click", function (event) {
		// Step-1 : get filed input
		const withdrawField = document.getElementById("user-withdraw");
		const withdrawFieldString = withdrawField.value;
		const withdrawFieldAmount = parseFloat(withdrawFieldString);
		// Step-2 : get withdraw info form htmltext

		const withdrawTotalElement = document.getElementById("withdraw");
		const withdrawTotalElementString = withdrawTotalElement.innerText;
		const withdrawTotalAmount = parseFloat(withdrawTotalElementString);

		// Step: 3 : Add value to withdrawTotalAmount;
		// step: 4 get withdraw info form htmltext

		const balanceTotalElement = document.getElementById("balance");
		const balanceTotalElementString = balanceTotalElement.innerText;
		const balanceTotalAmount = parseFloat(balanceTotalElementString);
        withdrawField.value = " ";
		if (isNaN(withdrawFieldAmount)) {
            
			alert("Please enter a valid amount");
            return;
		} else if (balanceTotalAmount < withdrawFieldAmount) {
			alert("you don't enoguh money on your account ");
           
            return;
		} else {
			// calculate total withdraw
			const currentDipositAmount = withdrawFieldAmount + withdrawTotalAmount;
			// add total Diposit
			withdrawTotalElement.innerText = currentDipositAmount;
			// calculate total Balance
			const currentBalanceAmount = balanceTotalAmount - withdrawFieldAmount;
			// add total Balance
			balanceTotalElement.innerText = currentBalanceAmount;
		}
	});
