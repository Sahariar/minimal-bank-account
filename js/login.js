// console.log('I am alive at login js');

const submitButton = document.getElementById("submit-form-btn");

// console.log(submitButton);
submitButton.addEventListener("click", function (event) {
	const emailInput = document.getElementById("user-email");
	const passwordInput = document.getElementById("user-password");
	const emailValue = emailInput.value;
	const emailLowCase = emailValue.toLowerCase();
	if (
		emailLowCase === "sahariark@gmail.com" &&
		passwordInput.value === "123456saha"
	) {
		location.href = "/dashboard.html";
	} else {

        alert('invalid User')
		console.log(emailLowCase);
		console.log(passwordInput.value);
	}
});
