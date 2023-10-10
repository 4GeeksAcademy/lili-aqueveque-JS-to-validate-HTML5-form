document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const form = document.querySelector(".payment-form");

    // Add event listener for form submit
    form.addEventListener("submit", function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Form validation
        let cardNumber = document.getElementById("inputCard").value;
        let cvc = document.getElementById("inputCvc").value;
        let amount = document.getElementById("inputAmount").value;
        let firstName = document.getElementById("inputFirstname").value;
        let lastName = document.getElementById("inputLastname").value;
        let city = document.getElementById("inputCity").value;
        let state = document.getElementById("inputState").value;
        let zip = document.getElementById("inputZip").value;
        let message = document.getElementById("message").value;

        // First, make sure all fields are filled out
        if (!cardNumber || !cvc || !amount || !firstName || !lastName || !city || !state || !zip || !message) {
            // If any field is empty, show an error message
            document.getElementById("alerty").innerHTML = "Please fill out all fields";
        } else if (cardNumber.length != 16) {
            document.getElementById("alerty").innerHTML = "Please fix some fields";
            document.getElementById("inputCard").style.backgroundColor = "red";
        } else if (cvc.length < 3) {
            document.getElementById("alerty").innerHTML = "Please fix some fields";
        }
        else {
            // If all fields are filled and correct, you can proceed with form submission or other actions
            document.getElementById("alerty").innerHTML = "The form was successfully submitted";
            // Here, you can write the code to submit the form data to the server
        }
    });
});
