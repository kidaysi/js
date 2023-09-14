// let city=prompt('Введите название города');
// let year=prompt('Введите год образования');
// let people=prompt('Введите кол-во населения города');
// alert('Городу ' + city + ' исполнилось ' +(2023-Number(year)) + ' лет с момента образования. Население города насчитывает ' + Number(people) + ' человек.');


// let price = +prompt('Введите стоимость товара')
// let count = +prompt('Введите количество денег клиента')
// let a = document.querySelector(".itog")
// if(price === count) {
//     let ok = "Покупка совершена";
//     a.textContent=ok;
// }else if (price > count){
//     let no = `Покупка не совершена. Не хватает ${price - count} ₽`;
//     a.textContent=no;
// }else{
//     let lok = `Покупка совершена. Сдача ${count - price} ₽`;
//     a.textContent=lok;
// }


// let n = prompt("Введите кол-во блоков");
// let box = '<div class="box"></div>';
// let box_list = document.querySelector('.box_list');
//
// for(let y = 0; y < n; y++){
//     box_list.insertAdjacentHTML('beforeend',box);
// }

let box_list = document.querySelector('.box_list');
let box = document.querySelector('.num');
let n = prompt('Введите кол-во блоков');
for(let x = 0; x < n; x++){
    box_list.insertAdjacentHTML('beforeend', `<div class="box">${x+1}</div>`);
}

