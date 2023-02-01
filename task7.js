const calculateAverage = (x)=>
{
    let sum = 0;
    for(let i =0;i<x.length;i+=1)
    { if(x)
        {
            sum+=x[i];
        }
        else if ([])
        {
            return null;
        }
    }
    return sum/2;
}
console.log(calculateAverage([1,2,3,3,4]));