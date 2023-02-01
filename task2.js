const swap = (array) =>
{
    if (array.length<2) 
    /*we create a condition 
    according to our task*/ 
    {return array}
    else if (array.length>=2)
    {
        let b; 
        /*we add variable 
        to switch
        our elements of array*/
        b=array[array.length-1];
        /*b equals to the
        last element of our array*/
        array[array.length-1]=array[0];
        /*last element of array
        equals to the first element*/ 
        array[0]=b;
        /*first element of array 
        equals to b
        to finally switch their places*/
        return array;
    }
}
console.log(swap(['one','two','three']));
console.log(swap([2,1]));