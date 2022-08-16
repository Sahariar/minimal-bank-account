const balanceTotalAmount = document.getElementById("balance");
const preBalancetTotal = parseInt(balanceTotalAmount.innerText, 10);
document
	.getElementById("submit-deposit")
	.addEventListener("click", function (event) {
		// get user Deposit field value
		const userDepositField = document.getElementById("user-deposit");
		//deposit total amount area.
		const depositeTotalAmount = document.getElementById("deposit");

		//deposit sring to number here.
		const depositeNewNum = parseFloat(userDepositField.value);
		//depositeTotalAmount  sring to number here.
		const preDepositTotal = parseFloat(depositeTotalAmount.innerText);

		if (userDepositField.value === "") {
			alert("Please enter a valid amount");
		} else {
			depositeTotalAmount.innerText = preDepositTotal + depositeNewNum;
			balanceTotalAmount.innerText = preBalancetTotal + depositeNewNum;
			userDepositField.value = " ";
		}
	});

document
	.getElementById("submit-withdraw")
	.addEventListener("click", function (event) {
		// get user withdraw field value
		const userWithdrawField = document.getElementById("user-withdraw");
		//deposit total amount area.
		const withdrawTotalAmount = document.getElementById("withdraw");

		//deposit sring to number here.
		const withdrawNewNum = parseFloat(userWithdrawField.value);
		console.log(withdrawNewNum);
		//prerWithdrawTotal  sring to number here.
		const preWithdrawTotal = parseFloat(withdrawTotalAmount.innerText);
		console.log(preWithdrawTotal);

		if (userWithdrawField.value === "") {
			alert("Please enter a valid amount");
		} else if (preBalancetTotal <= withdrawNewNum) {
			alert("you don't enoguh money on your account ");
		} else if (preBalancetTotal < 0) {
			alert("you have 0 money on your account ");
		} else {
			withdrawTotalAmount.innerText = preWithdrawTotal + withdrawNewNum;
			balanceTotalAmount.innerText = preBalancetTotal - withdrawNewNum;

			userWithdrawField.value = " ";
		}
	});
