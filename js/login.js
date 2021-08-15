document.getElementById("logInSubmit").addEventListener("click", function(){
    const emailField = document.getElementById("userEmail");
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById("userPassword");
    const userPassword = passwordField.value;

    //user validation
    if (userEmail == "prosenjit@gmail.com" && userPassword == "123"){
        window.location.href = "bankinfo.html";
    }
    else{
        alert("Incorrect User name or Password.");
    }
})