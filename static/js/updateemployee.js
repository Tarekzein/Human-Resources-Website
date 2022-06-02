let status = "{{emp.maritalStatus}}";
let gender = "{{emp.gender}}";
let r1 = document.querySelector("#radio01");
let r2 = document.querySelector("#radio02");
let options=document.querySelectorAll("#wrap select option")
r1.checked = false;
if (gender === "male") {
  r1.checked = true;
  r1.checked = "checked";
  r2.checked = false;
} else {
  r2.checked = true;
  r2.checked = "checked";
  r1.checked = false;
}

options.forEach(op=>{
  op.removeAttribute("selected");

  if (op.value === status) {
    op.selected = "selected";
  }

});


