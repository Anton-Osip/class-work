const color = document.querySelector('.color');
const range = document.querySelector('.range');
const canvas = document.querySelector('.canvas');
const clean = document.querySelector('.clean');

console.log(range.value);


const brush = {
    color:'black',
    size:`10px`,
}

color.addEventListener('input',(event)=>{
    brush.color = event.currentTarget.value
})
clean.addEventListener('click',()=>{
    canvas.innerHTML=('')
})

const drowPixel = (posX,posY)=>{
    const pixel = document.createElement('div');

    pixel.style.width = brush.size;
    pixel.style.height = brush.size;
    pixel.style.borderRadius = '50px';
    pixel.style.backgroundColor = brush.color;
    pixel.style.position = 'absolute';
    pixel.style.top = `${posY}px`;
    pixel.style.left =`${posX}px`;

    canvas.appendChild(pixel);
};
function driwerFunc (event){
 drowPixel(event.clientX,event.clientY);
}


canvas.addEventListener('mousedown',()=>{
    brush.size = `${range.value}px`;    
    canvas.addEventListener('mousemove',driwerFunc)});
canvas.addEventListener('mouseup',()=>{canvas.removeEventListener('mousemove',driwerFunc)});