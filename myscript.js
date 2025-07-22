function myFunction() {
    // Get form values
    var firstname = document.getElementById("fn").value;
    var lastname = document.getElementById("ln").value;
    var phoneno = document.getElementById("pn").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById('email').value;

    // Initialize error messages
    document.getElementById('error1').innerHTML = "";
    document.getElementById('error2').innerHTML = "";
    document.getElementById('error3').innerHTML = "";
    document.getElementById('error4').innerHTML = "";
    document.getElementById('error5').innerHTML = "";

    let isValid = true;

    // Validation checks
    if (firstname.length < 3) {
        document.getElementById('error1').innerHTML = "First name must be at least 3 characters!";
        isValid = false;
    }
    if (lastname.length < 3) {
        document.getElementById('error2').innerHTML = "Last name must be at least 3 characters!";
        isValid = false;
    }
    if (email.length == 0) {
        document.getElementById('error3').innerHTML = "Email address cannot be left empty";
        isValid = false;
    }
    if (!mailformat.test(email)) {
        document.getElementById('error4').innerHTML = "You must enter a valid email!";
        isValid = false;
    }
    if (phoneno.length != 8) {
        document.getElementById('error5').innerHTML = "Phone number must be exactly 8 digits!";
        isValid = false;
    }
    if (!isValid) {
    return false;
    }

    localStorage.setItem('firstname', firstname);
    welcomemsg(firstname);

    window.scrollTo({top: 0, behavior: "smooth"});

alert("You have registered successfully!");
return true;
}

function welcomemsg(firstname) {
    // display the welcome message
    document.getElementById('welcome').innerHTML = "Welcome, " + firstname + "!";
}

// function that checks if there us a value stored in local storage
// if there is no value stored (meaning form was not submiited before) it does nothing

function checkfirstname () 
{
    var storedfn = localStorage.getItem('firstname');

    if (storedfn) {
        // calls the welcome message function if there is a value stored in local storage
        welcomemsg(storedfn);
    }
}
 window.onload = checkfirstname();