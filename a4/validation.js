function validateForm() {
    var isValid = true;
    var errorMessage = "";
   

    // Username validation
    var username = document.getElementById("username").value;
    if(!username) {
        errorMessage += "Username \n";
        isValid = false;
    } else {
    var usernameRegex = /^[a-z0-9]{4,12}$/;
    if (!usernameRegex.test(username)) {
        errorMessage += "<span style ='color: orange;'> a valid username</span> \n";
        isValid = false;
    }
}
    // Email validation
    var email = document.getElementById('email').value;
    if (!email){
        errorMessage +="Email \n";
        isValid = false;
    }

    // Phone number validation
    var phone = document.getElementById('phone').value;
    if (!phone) {
        errorMessage +="Phone number \n";
        isValid = false;
    } else {
        var phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
        errorMessage +="<span style ='color: orange;'> a valid phone number</span> \n";
        isValid = false;
        }
    }

// Password validation
var password = document.getElementById('password').value;
if (!password) {
    errorMessage +="Password \n";
    isValid = false;
}

// Confirm password validation
var confirmPassword = document.getElementById('confirmPassword').value;
if(!confirmPassword) {
    errorMessage +="Confirm Password \n";
    isValid = false;
}

// Check if the passwords match
if (password && confirmPassword && password !== confirmPassword) {
    alert("Passwords do not match");
    isValid = false;
}

    // Gender validation

    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        errorMessage +="Gender \n";
        isValid = false;
    }

    // Age group validation
    var ageGroup = document.getElementById('ageGroup').value;
    if (ageGroup === "i") { // checks if first option is selected
        errorMessage +="Age Group \n";
        isValid = false;
    }

    return { isValid : isValid, errorMessage : errorMessage };
}
  
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();
    var validationResult = validateForm();
    if (!validationResult.isValid) {
        // Split the error message by the newline character
        var errorMessages = validationResult.errorMessage.split('\n');
        // Prepend "Please Enter" to each message
        for (var i = 0; i < errorMessages.length; i++) {
            if (errorMessages[i]) {
                errorMessages[i] = "<span class='black-text'>Please Enter</span> " + errorMessages[i];
            }
        }
        // Join the messages back together with newline characters
        document.getElementById('errorMessage').innerHTML = errorMessages.join('<br>');
    }
});
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('getinfo').reset();
});