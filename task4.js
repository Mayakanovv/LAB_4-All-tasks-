const addPrefix = (names,prefix) =>
{
    let result ='';
    //we add counter variable
    for(let i =0; i< names.length; i+=1)
    //loop fo traversing an array
    {
        if(prefix) //condition if prefix been added
        {
            result += prefix+' '+names[i]+', ';
        }
    }
        return result;
}
names = ['John','Smith','Karl'];
console.log(addPrefix(names, 'Mr'));