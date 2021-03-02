const sliderContainer = document.getElementById('img__container');
const mainContainer = document.querySelector('.img__container');

const slides = new Array(10);

let STEP = 0;
slides.fill('');

slides.map((slide,index)=>{
    slide = new Image(300);
    slide.src = `img/img${index+1}.jpg`
    sliderContainer.appendChild(slide)
})

const drawArrow = ()=>{
    const arrowLeft = document.createElement('span');
    arrowLeft.innerHTML = '<';
    const arrowRight = document.createElement('span');
    arrowRight.innerHTML = '>';
    mainContainer.prepend(arrowLeft);
    mainContainer.appendChild(arrowRight);
    arrowRight.addEventListener('click',slideRight);
    arrowLeft.addEventListener('click',slideleft);
}

function slideRight (){
    STEP++;
    sliderContainer.style.transform = `translateX(${-300*STEP}px)`;
} 
function slideleft (){
    STEP--;
    sliderContainer.style.transform = `translateX(${-300*STEP}px)`;
}



drawArrow();
