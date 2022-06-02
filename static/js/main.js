
// about animations function 
function animateAbout() {
  let aboutOverlay = document.querySelector(".about .overlay");
  let textBox = document.querySelector(".about-content .text");
  let photoBox = document.querySelector(".about-content .photo");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    aboutOverlay.classList.add("slideLeft");
    textBox.classList.remove("fadeInverse");
    photoBox.classList.remove("scaleInverse");
    aboutOverlay.classList.remove("slideRight");
    textBox.classList.add("fade");
    photoBox.classList.add("scale");
  }
  else {
    aboutOverlay.classList.add("slideRight");
    aboutOverlay.classList.remove("slideLeft");
    textBox.classList.add("fadeInverse");
    textBox.classList.remove("fade");
    photoBox.classList.add("scaleInverse");
    photoBox.classList.remove("scale");
  }

}

// give background color on scroll to nav function
function colorizeNav() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector(".nav").style.backgroundColor = "var(--secColor)";
  }
  else {
    
    document.querySelector(".nav").style.backgroundColor = "transparent";
  }
}
// display the up btn on scroll function
function pageUpBtn() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector(".page-up").style.display="flex";
  }
  else {
    document.querySelector(".page-up").style.display="none";
    
  }
}

// make skills bars be animated
function bestEmployeeSec() {
  let bestEmployee = document.querySelector(".best-employee");

  let bestEmpOffsetTop = bestEmployee.offsetTop;
  let bestEmpOffsetHeight = bestEmployee.offsetHeight;
  let windowHeight = this.innerHeight;

  let windowScrollTop = this.pageYOffset;
  let bars = document.querySelectorAll(".progress .skill .bar span");

  if (windowScrollTop > (bestEmpOffsetTop + bestEmpOffsetHeight) - windowHeight) {
    bars.forEach(bar => {
      let prog = bar.getAttribute("data-prog");
      bar.style.width = prog;
    });
  }
  else {
    bars.forEach(bar => {
      bar.style.width = "0%";
    });
  }
}

// on scrolling call the functions
window.onscroll = () => {

  colorizeNav(); //call coloring navbar function 
  animateAbout(); // call about section animation function
  pageUpBtn(); // call page-up button function 
  bestEmployeeSec();
}

// add event to page-up button
let btnUp = document.querySelector(".page-up");
btnUp.addEventListener("click", () => { 
  this.scrollTo(0,0); // scroll to top of page
});

// page loading code

let loadIcon = document.querySelector(".load-icon");
let parent = document.querySelector('.parent');

parent.style.display = "none";

setTimeout(() => {
  loadIcon.style.display="none"
  parent.style.display = "block";
},4000); 


// menu icon change

// let menuIcon = document.querySelector(".menu-icon");

// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle("change");
//   let menuVertical = document.querySelector(".vertical-menu");
//   if (menuIcon.classList.contains("change")) {
//     menuVertical.style.right = "0";
//     menuIcon.style.position = "fixed";
//     document.querySelector(".nav").style.backgroundColor = "var(--secColor)";
//   }
//   else {
//     menuVertical.style.right = "-350px";
//     // menuIcon.style.position = "absolute";
//     document.querySelector(".nav").style.backgroundColor = "transparent";
//   }
// });

// footer icons



function openFacebook() {
  window.open("https://www.facebook.com/mayar.mero.3363334");
  window.open("https://www.facebook.com/Tarekzein22/");
  window.open("https://www.facebook.com/mohamed.nour.735507");
  window.open("https://www.facebook.com/john.fady.923");
  window.open("https://www.facebook.com/beshoy.ashraf.100");
  
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/tarek-zein-a762211b3/");
  window.open("https://www.linkedin.com/in/john-fady-a593b2210/");
  window.open("https://www.linkedin.com/in/mayar-khaled-0532921bb/");
  window.open("https://www.linkedin.com/in/nourmuhammed33/");
  window.open("https://www.linkedin.com/in/beshoy-ashraf-2669b2205/");
}

function openInstagram() {
  window.open("https://www.instagram.com/elnerwegiix.x/");
  window.open("https://www.instagram.com/mayarkhaled347/");
  window.open("https://www.instagram.com/tarek._.zein/");
  window.open("https://www.instagram.com/john.fady.923/");
  window.open("https://www.instagram.com/beshoo.ashraf/");
  
}










