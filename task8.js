//счетчик
//цикл
//новая переменная в которой слайсятся все элементы 
//если элемент слайса не равен, прерываем итерацию
//переменная в которую будет записан ответ в виде цифр
//суммируем все похожие элементы

//пришлось долго соображать что тут сделать
const getTotalAmount=(array,currency)=>
{
    let sum=0;
    for(item of array)
    {
        currentCurrency=item.slice(0,3);
        if(currentCurrency!==currency)
        {
            continue;
        }
        const otvet = Number(item.slice(4))
        sum+=otvet;
    }
    return sum;
}
const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
console.log(getTotalAmount(money1,'usd'));