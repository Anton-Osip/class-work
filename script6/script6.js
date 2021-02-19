console.log(document);
console.dir(document);

document.body.style.margin = '0';
document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="./style/style.css">');
const newDiv = document.createElement('div');
newDiv.innerHTML = '<img src="img/logo.png">';
newDiv.style.display = 'flex';
newDiv.style.height = '60px';
newDiv.style.backgroundColor = '#F6E05E';
newDiv.style.width = '100vw';
newDiv.style.boxSizing = 'border-box';
newDiv.hidden=true;


const nav = document.createElement('nav');

nav.innerHTML = `<li>Home</li><li>About</li><li>Priceng</li><li>Register</li>`;
nav.style.backgroundColor='black';
nav.style.color='white';
nav.style.listStyleType='none';
nav.style.display='grid';
nav.style.gridAutoFlow='column';
nav.style.width='100%';
nav.style.marginLeft='30px';
nav.style.padding='15px';
nav.style.alignItems='center';
nav.style.justifyContent='end';
nav.style.columnGap='50px';


const btn = document.createElement('button');
btn.innerHTML = `Sign in`;

btn.style.background='#FFFFFF';
btn.style.borderRadius='5px';
btn.style.padding='5px 16px';
btn.style.fontWeight='bold';
btn.style.fontSize='16px';
btn.style.lineHeight='19px';
btn.hidden=true;

document.body.appendChild(newDiv);
newDiv.appendChild(nav);
nav.appendChild(btn);
const logo = document.querySelector('img');

logo.classList.add('img-container');

let btn1 =  document.querySelector('.btn1');
let btn2 =  document.querySelector('.btn2');
let btn3 =  document.querySelector('.btn3');
let btn4 =  document.querySelector('.btn4');

btn4.addEventListener('click',()=>{
    btn.hidden=false;
})
btn3.addEventListener('click',()=>{
    btn.hidden=false;
})
btn2.addEventListener('click',()=>{
        btn.hidden=false;
})
btn1.addEventListener('click',()=>{
    btn.hidden=false;
})
