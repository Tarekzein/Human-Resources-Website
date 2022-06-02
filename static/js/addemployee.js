const ename = document.getElementById("name");
const eid = document.getElementById("id");
const email = document.getElementById("mail");
const eaddress = document.getElementById("address");
const etel = document.getElementById("tel");
let sal=document.getElementById("Salary");



document.forms[0].onsubmit = (e) => {
  let flag = true;

  if (ename.value === "") {
    flag = false;
    ename.focus();
  }

  else if (eid.value === "") {
    flag = false;
    eid.focus();
  }
  else if (email.value === "") {
    flag = false;
    email.focus();
  }
  else if (eaddress.value === "") {
    flag = false;
    eaddress.focus();
  }
  else if (etel.value === "") {
    flag = false;
    etel.focus();
  }
  else if(sal.value<=0){
    flag=false;
    sal.focus();
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
