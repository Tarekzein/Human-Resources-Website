// change the background automaticaly
setInterval(() => {
  
  let imgArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
  let ranIndex = Math.floor(Math.random() * imgArr.length);
  let parent = document.querySelector(".parent");
  // landPage.style.backgroundImage = "url('/images/03.jpg')";
  parent.style.backgroundImage = `url("static/images/intro/${imgArr[ranIndex]}")`;

  
}, 5000);
