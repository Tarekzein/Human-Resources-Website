
var nameE = document.querySelector("#name");
var email = document.querySelector("#email");
var pass = document.querySelector("#pass");
var pass2 = document.querySelector("#pass2");

document.forms[0].onsubmit = (btn) => {

    var flag = false;
    if (nameE.value === "") {
        nameE.focus();
        document.querySelector(".alert h4").textContent = "Enter Your Name";
        flag = true;
    }
    else if (nameE.value.length > 10) {
        document.querySelector(".alert h4").textContent = "Name must be at most 10 characters";
        flag = true;
        
    }
    else if (email.value === "") {
        email.focus();
        document.querySelector(".alert h4").textContent = "Enter Your Email";
        flag = true;
    }
    
        
        
    else if (pass.value === "") {
        pass.focus();
        document.querySelector(".alert h4").textContent = "Enter Your password";
        flag = true;
    
    }
    else if (pass.value.length < 8 || pass.value.length > 20) {
        pass.focus();
        document.querySelector(".alert h4").textContent = "Enter Your password from 8 to 20 characters";
        flag = true;
    }
    
    else if (/^[A-Za-z0-9]*$/.test(pass.value)===false) {
        pass.focus();
        document.querySelector(".alert h4").textContent = "Enter Your password with Letters and Numbers";
        flag = true;
    }
    

    else if (pass2.value === "" || pass2.value !== pass.value) {
        pass2.focus();
        document.querySelector(".alert h4").textContent = "Passwords doesn't match";
        flag = true;

    }

    if (flag === true) {
        
        btn.preventDefault();
        document.querySelector('.alert').style.display = "block";
    }

    console.log("yyyy");

}

let icon = document.querySelector(".alert i");
icon.addEventListener("click", () => {
  document.querySelector(".alert").style.display = "none";

});


