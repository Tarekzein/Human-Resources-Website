const passInput = document.getElementById('pass');
const emailInput = document.getElementById('email');



document.forms[0].onsubmit = (v) => {

  let flag = true;
    
    if (emailInput.value === "") {
          flag = false;
          document.querySelector(".alert h4").textContent = "Enter your Email";
    }
  
    else if (passInput.value === "" ) {
      flag= false;
      document.querySelector(".alert h4").textContent = "Enter your Password";
    }
      
    else if (passInput.value.length <= 8 ) {
      flag= false;
      document.querySelector(".alert h4").textContent = "Wrong Password";
    }
    

    if (flag===false) {
        v.preventDefault();
        document.querySelector(".alert").style.display = "block";
    }
    

}

let icon = document.querySelector(".alert i");
icon.addEventListener("click", () => {
  document.querySelector(".alert").style.display = "none";

});
