document.write('<h1>Welcom to test</h1>')

let res = 0;
// let emptyResult = 0;
const ask1 = prompt('Назови свою фамилию, имя, отчество.');

if(ask1.length){
    res++
}/* else {
     emptyResult++
 }*/
 const ask2 = prompt('Назови фамилию, имя, отчество мамы.');
 if(ask2.length){
    res++
}
const ask3 = prompt(' Ты девочка или мальчик? Кем ты будешь, когда вырастешь, женщиной или мужчиной?');
if(ask3.length){
   res++
}
const ask4 = prompt('У тебя есть брат, сестра? Кто старше?');
if(ask4.length){
   res++
}
const ask5 = prompt('Сколько тебе лет? А сколько будет через год? Че­рез два года?');
if(ask5.length){
   res++
}
const ask6 = prompt(' Сейчас утро или вечер? День или утро?');
if(ask6.length){
   res++
}
console.log(res);
if(res==6){
    document.write('<h2>высокий уровень психосоциаль­ной зрелости</h2>')
}else if(res>=4){
    document.write('<h2>средний уровень психосоциальной зрелости</h2>')
}else{
    document.write('<h2>низкий уровень психосоциаль­ной зрелости.</h2>')
}
