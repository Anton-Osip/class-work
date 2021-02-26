const images = document.querySelectorAll('.img__block > div');

const creatModalWindow = (sourse)=>{
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    modalContainer.innerHTML = `  
    <div class="modal-block">
        <img src="${sourse}">
    </div>`;


     //Удоляем модальное окно

    const close = document.createElement('button');
    close.innerHTML = 'CLOSE'
    close.addEventListener('click',()=>{
        modalContainer.classList.remove('show')
        setTimeout(()=>{
            modalContainer.remove()
        },500)
       
    })
    modalContainer.appendChild(close);
    document.body.appendChild(modalContainer);


    setTimeout(()=>{
        modalContainer.classList.add('show')
    },500)
  
};


images.forEach((item)=>{
    item.addEventListener('click',()=>{
    // получаю урл картинки и передаю в creatModalWindow

    creatModalWindow(item.children[0].src);
})})


