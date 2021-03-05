//Функция конструктор

function newConstr(name){
    this.name = name;
    this.read  = function(text){
        console.log(text);
    };
    this.write  = function(text){
        console.log(text)
    };
    this.speak  = function(text){
        alert(text);
    };
}

const men = new newConstr('blablablabla','vghjk')


// Наследование apply()

function Programmer(lang){
    this.lang =  lang;
    newConstr.apply(this,arguments)
}

let java = new Programmer('java');
// console.log(java);

function AUTO (gear){
    this.gear=gear;
    this.ride = function(){
        console.log('brbrbrbrbr');
    };
    this.stop = function(){
        console.log('stop');
    };
}

function audi (gear,color,model){
    AUTO.apply(this,arguments)
    this.color=color;
    this.go = function(){
        console.log('go');
    }
    this.model = model
}

let a = new audi('brbrbrb','red','A1')
// console.log(a);


// интерфйс для добовления функционала на сайт

function TageConstructor(tag){
    this.tag=tag;
    this.create = function(){
        let elem = document.createElement(tag);
        return elem;
    };
    this.add= function(elem){
        document.body.appendChild(elem)
    }
};

function ImageConstructor(alt, src){
    this.src = src;
    this.alt = alt;
    TageConstructor.apply(this,arguments);
    this.parentCreate = this.create;
    this.create = function(){
       const elem =  this.parentCreate();
       elem.src=this.src
       elem.alt=this.alt
       return elem
   }
};


function TextTagConstructor(tag, style){
    TageConstructor.apply(this,arguments);

    this.setDefaoltStyles = function(elem){
        elem.style = style + '; font-family:arial'
    };
  
}


const header2 = new TextTagConstructor('h2','color:red');

const domObj = header2.create();
header2.setDefaoltStyles(domObj);

console.log(domObj);

const image1 = new ImageConstructor('img','https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg','text');
const imageElem=image1.create();
image1.add(imageElem)
console.log(imageElem);
