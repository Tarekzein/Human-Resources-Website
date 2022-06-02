const eid = document.getElementById("userid");
const vacfrom = document.getElementById("from");
const vacto = document.getElementById("to");
const reason = document.getElementById("reason");


document.forms[0].onsubmit = (e) => {
  let flag = true;

  if (eid.value === "") {
    flag = false;
    eid.focus();
    document.querySelector(".alert h4").textContent = "Please fill this field";
  }

  else if (vacfrom.value === "") {
    flag = false;
    vacfrom.focus();
    document.querySelector(".alert h4").textContent = "Please fill this field";
  }
  
  else if (vacto.value === "") {
    flag = false;
    vacto.focus();
    document.querySelector(".alert h4").textContent = "Please fill this field";
  }

  else if (reason.value === "") {
    flag = false;
    reason.focus();
    document.querySelector(".alert h4").textContent = "Please fill this field";
  }
  
  else if(vacfrom.value >= vacto.value){
        document.querySelector(".alert h4").textContent = "from date should be less than to date";
        flag= false; 
  }

  
  if (flag === false)
  {
    e.preventDefault();
    document.querySelector(".alert").style.display = "block";
  }

} 

document.querySelector(".alert i").addEventListener("click", () => {
  document.querySelector(".alert").style.display = "none";

});

// function allLetter(eid.value)
//   {
//     var letters = /^[A-Za-z]+$/;
//     if(inputtxt.value.match(letters))
//       {
//       return true;
//       }
//     else
//       {
//       alert("message");
//       return false;
//       }
//   }