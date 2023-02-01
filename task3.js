const getCity = (cities, index, def = null) =>
{
if(index<cities.length) 
/*we check our array
for an existing element*/
{
    return cities[index];
}
/*else means that otherwise we output
the added string*/ 
return def;
}
let cities = ['moscow','london','berlin','potro']
console.log(getCity(cities,1));
console.log(getCity(cities, 20,'4234'))