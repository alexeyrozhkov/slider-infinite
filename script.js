const ul = document.querySelector('.inner-lists');
const buttonRight = document.querySelector(".right");
const buttonLeft = document.querySelector(".left");
const lis = document.querySelectorAll('.inner-list');
const circles = document.querySelectorAll('.circle');

const SLIDES_TOTAL = lis.length;
const SLIDES_COUNT = 1;
const imgWidth = 420;
let currentIndex = 0;

function shouldDisableLeftButton() {
    return currentIndex === 0;
}

function shouldDisableRightButton() {
    return currentIndex === SLIDES_TOTAL - 1;
}

function disableLeftButton() {
    buttonLeft.setAttribute("disabled", "disabled"); 
    buttonLeft.classList.add('disabled');
}

function undisabledLeftButton() {
    buttonLeft.removeAttribute("disabled", "disabled");
    buttonLeft.classList.remove('disabled');
}

function disableRightButton() {
    buttonRight.setAttribute("disabled", "disabled"); 
    buttonRight.classList.add('disabled');
}

function undisableRightButton() {
    buttonRight.removeAttribute("disabled", "disabled");
    buttonRight.classList.remove('disabled'); 
}

function markCirle(index) {
    const circlesWrapper = document.querySelector(".circles");
    const selected = circlesWrapper.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    circles[index].classList.add("selected");
}

markCirle(currentIndex);
disableLeftButton();

buttonLeft.onclick = function() {
    currentIndex--;
    const currentMarginLeft = parseInt(ul.style.marginLeft); 
    ul.style.marginLeft = currentMarginLeft + imgWidth + 'px';
    markCirle(currentIndex);
    undisableRightButton();
    if (shouldDisableLeftButton()) {
        disableLeftButton();
    }
}
 
buttonRight.onclick = function() {
    currentIndex++;
    const currentMarginLeft = parseInt(ul.style.marginLeft);
    ul.style.marginLeft = currentMarginLeft - imgWidth + 'px';
    markCirle(currentIndex);
    undisabledLeftButton();
    if (shouldDisableRightButton()) {
        disableRightButton();
    }

}

for(let i=0; i< circles.length; i++) {
    circles[i].onclick = function() {
        currentIndex = i;
        shouldDisableLeftButton() ? disableLeftButton() : undisabledLeftButton();
        shouldDisableRightButton() ? disableRightButton() : undisableRightButton();
        ul.style.marginLeft = 0 - imgWidth * circles[currentIndex].dataset.number + "px";
        markCirle(currentIndex);
    }
}