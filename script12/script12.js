class TreloData{
    constructor(board){
        this.board = board;
        this.cards = localStorage.getItem('cards')?localStorage.getItem('cards').split(','):[];
        this.tascs=[];
    }

    set card(card){
        this.cards.push(card);
    }

    get card(){
        return this.cards;
    }

    set tasc(tasc){
        this.tascs.push(task)
    }

    get tasc(){
        return this.tascs;
    }
}


class TrelUI extends TreloData{
    constructor(){
        super()
    }
    drowCards(){
        const container =document.getElementById('cards');
        container.innerHTML = '';
        this.cards.map(item=>{
            const card = document.createElement('div');
            const addTaskBtn =  document.createElement('button');
            addTaskBtn.innerHTML = '+ add Task';
            const input = document.createElement('input');
            card.id = this.cards.length;
            addTaskBtn.addEventListener('click',(event)=>{
                event.cur
                this.task = {
                    name:input.value,
                    cardName: item,
                    status:'grey',
                    discription:'',
                };
                input.value = '';
                this.task.filter(item=>item.cardName === item)
            })
            event
            card.innerHTML = item ;
            card.appendChild(input);
            card.appendChild(addTaskBtn);
            container.appendChild(card);
        })
        window.localStorage.setItem('cards',this.cards)
    }
    createCard(event){
        event.preventDefault();
        const newCArd = event.currentTarget[0].value;
        this.card = newCArd;
        event.currentTarget.remove();
        this.drowCards()
    }
    createAddingCardForm(){
        document.body.insertAdjacentHTML('beforeend',`
            <form id = 'createForm'>
                <input type = 'text' placeholder = 'Ввести заголовок карточки' >
                <button >Добавить карточку</button>
            </form>`
        )
        document.getElementById('createForm').addEventListener('submit',(event) =>this.createCard(event))

    }
    init(){
        document.body.insertAdjacentHTML('beforeend',`
            <button id = 'addCard'>+ Добавить колонку</button>`
        )
        document.getElementById('addCard').addEventListener('click', ()=>this.createAddingCardForm())
        this.drowCards();
    }
}


const trelo = new TrelUI('new board');

trelo.init()

