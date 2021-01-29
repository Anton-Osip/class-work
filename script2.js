const answer1 = prompt('Кокого цвета небо');



const answer2 = prompt('Сколько будет 8*8');

if((answer1 === 'голубое') || (answer1 === 'синее') && (+answer2 === 8*8)){
    alert('Правильно');
}