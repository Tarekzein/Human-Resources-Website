// delete button

let delbtn=document.querySelector("#delbtn");



delbtn.addEventListener("click",()=>{

    let ov=document.querySelector(".overlay");
    ov.style.display="flex";

});


let ov=document.querySelector(".overlay .message a")
ov.addEventListener("click",()=>{
    this.parentElement.parentElement.style.display="none";
});
