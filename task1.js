const getWeekends = (x) =>
{
   let long = ['Saturday','Sunday'];
   /* we make first array 
   with the full name of weekends*/
   let short = ['Sat', 'Sun'];
   /*then we make array with 
   abbreviated weeekend names*/ 
    if(x === 'long')
    /*then we create a condition
    to output an array with full names */
    {
        return long;
    }
    else if(x==='short')
    /*then we create a condition
    to output an array with 
    abbreviated names*/
    {
        return short;
    }
}
console.log(getWeekends('short'));
console.log(getWeekends('long'));