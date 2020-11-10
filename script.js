const ul = document.querySelector('.inner-lists');
const buttonRight = document.querySelector(".right");
const buttonLeft = document.querySelector(".left");
const li = document.querySelector('.inner-list');
const circles = document.querySelectorAll('.circle');


const quantityImgs = 5;

let currentIndex = 0;
let imgCurrent = li.querySelector('img');

const imgs = [
    "./assets/img-1.jpg",
    "./assets/img-2.jpg",
    "./assets/img-3.jpg",
    "./assets/img-4.jpg",
    "./assets/img-5.jpg",
    "./assets/img-6.jpg",
];


buttonRight.onclick = function() {
    imgCurrent.setAttribute('src',imgs[currentIndex+1]);
    currentIndex++;
    if( currentIndex >= quantityImgs) {
        currentIndex = -1;
    }
    

}

buttonLeft.onclick = function() {
    if(currentIndex <= 0) {
        currentIndex = 6;
    }
    imgCurrent.setAttribute('src',imgs[currentIndex-1]);
    currentIndex--;
    
   
}



for(let i=0; i< circles.length; i++) {
    circles[i].onclick = function() {
        currentIndex = i;
        markCirle(currentIndex);
    }
}