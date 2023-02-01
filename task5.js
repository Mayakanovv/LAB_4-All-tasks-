const reverse = (array) =>
{
    if(array)
    {
        let b; 
        /*We use first variable for
        replacing first 
        and last array elements*/
        b=array[array.length-1]; 
        /*By this expression we say that b 
        equals to array's last element*/
        array[array.length-1]=array[0];
        /*Then we make the last element of
        our array equal to first. Why?
        to swap their places 
        in the next move*/
        array[0]=b;
        /*After our above manipulations
        with array, we equate first 
        element of our array to b
        (to finally switch their places)*/ 
        return array;
    }
}
let array = ['Karl','Smith','John'];
console.log(reverse(array)); //test



/*Тут просто проверяю 
информацию из документации 
лень юзать инглиш*/
const x1 = [1,2,3];
const x2 = [3,2,1];
const x3 = x1.concat(x2);
/*Вкратце функция concat возвращает нам
новый массив который состоит из массива,
на котором он был вызван
*/
console.log(x3);