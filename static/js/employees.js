function pageUpBtn() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector(".page-up").style.display="flex";
    }
    else {
        document.querySelector(".page-up").style.display="none";
        
    }
}

window.onscroll = () => {
    pageUpBtn();
};

// display options list
let circle=document.querySelectorAll(".options .shape i");
circle.forEach(c=>{
    c.addEventListener("click",()=>{
        
        if(c.classList.contains("fa-ellipsis-vertical")){
            c.classList.remove("fa-ellipsis-vertical");
            c.classList.add("fa-xmark");
            c.parentElement.nextElementSibling.style.display="block";
        }
        else{
            c.classList.add("fa-ellipsis-vertical");
            c.classList.remove("fa-xmark");
            c.parentElement.nextElementSibling.style.display="none";
        }

    });
});

// delete button
let del=document.querySelectorAll(".options .list .del a ");
del.forEach(c=>{

    c.addEventListener("click",()=>{

        let ov=c.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild;
        ov.style.display="flex";

    });
});

let ov=document.querySelector(".overlay .message a")
ov.addEventListener("click",()=>{
    this.parentElement.parentElement.style.display="none";
});


let btnUp = document.querySelector(".page-up");
btnUp.addEventListener("click", () => { 
    this.scrollTo(0,0); // scroll to top of page
});

// search bar
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);