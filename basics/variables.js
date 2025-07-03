const accountId = 123345
let accountEmail = "chanduedupa@gmail.com"
var accountPasswword = "12132"
accountcity = "surat"
/*
prefer not use var 
becauase of issue in block and function scope
*/
 accountEmail = "rahuledupa@gmail.com"
accountPasswword = "215487"
accountcity = "delhi"
console.log(accountId);

console.table([accountId, accountEmail, accountPasswword,accountcity])
