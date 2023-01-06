const imageList = ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png"]

const imageIndex = Math.floor(Math.random()*imageList.length);
const currentImage = imageList[imageIndex];

const bgImage = document.createElement("img"); // html에 <img> 추가

bgImage.src = `img/${currentImage}`; //경로
    // creat HTML --> ex) <img src=img/0.png> (img:folder name)
// document.body.appendChild(bgImage); // body의 제일 마지막에 
document.body.style.backgroundImage = `url(${bgImage.src})`;