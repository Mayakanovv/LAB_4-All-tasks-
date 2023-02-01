//Агрегация
const calculateSum = (array) =>
{
 let sum = 0;
 for(let i = 0; i<array.length; i+=1)
 {
    if(array[i]%3===0)
    {
        sum+= array[i];
    }
    else if(array===[])
    {
        return 0;
    }
 }
 return sum;
}

console.log(calculateSum([2,3,4,5,6,8,2,9]));