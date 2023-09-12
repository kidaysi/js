// let city=prompt('Введите название города');
// let year=prompt('Введите год образования');
// let people=prompt('Введите кол-во населения города');
// alert('Городу ' + city + ' исполнилось ' +(2023-Number(year)) + ' лет с момента образования. Население города насчитывает ' + Number(people) + ' человек.');
//

let price = +prompt('Введите стоимость товара')
let count = +prompt('Введите количество денег клиента')

if(price === count) {
    alert("Покупка совершена")
}else if (price > count){
    alert (`Покупка не совершена. Не хватает ${price - count}₽`);
}else{
    alert(`Покупка совершена. Сдача ${count - price} ₽`);
}
