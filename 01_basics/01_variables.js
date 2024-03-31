const accountId = 144553
let accountEmail= "nitin@gmail.com"
var accountPassword= "12345"
accountCity= "jaipur"

// accountId= 2 // not alowed

accountEmail= "a@hotmail.com"
accountPassword= "2344"
accountCity= "etawah"
let accountState;

/*
prefer not to  use var- scope problem
*/

console.log(accountId); 
console.table([accountEmail, accountPassword, accountCity, accountState])
