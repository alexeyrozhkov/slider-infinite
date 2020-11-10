const ul = document.querySelector('.inner-lists');
const buttonRight = document.querySelector(".right");
const buttonLeft = document.querySelector(".left");
const li = document.querySelector('.inner-list');
const circles = document.querySelectorAll('.circle');


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

function markCirle(index) {
    const circlesWrapper = document.querySelector(".circles");
    const selected = circlesWrapper.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    circles[index].classList.add("selected");
}

markCirle(currentIndex);


buttonRight.onclick = function() {
    currentIndex++;
    if( currentIndex >= imgs.length) {
        currentIndex = 0;
    }
    imgCurrent.setAttribute('src',imgs[currentIndex]);
    markCirle(currentIndex);

}

buttonLeft.onclick = function() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    imgCurrent.setAttribute('src',imgs[currentIndex]);
    markCirle(currentIndex);
    
    
   
}



for(let i=0; i< circles.length; i++) {
    circles[i].onclick = function() {
        currentIndex = i;
        imgCurrent.setAttribute('src',imgs[currentIndex]);
        markCirle(currentIndex);
    }
}