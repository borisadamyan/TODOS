const {SHA256} =require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);
var decoded = jwt.verify(token, '123abc');
console.log(decoded);
/*

var message = 'I am user number 3';

var hash = SHA256(message).toString();

console.log(message);
console.log(hash);

var date = {
  id: 4
};

var token = {
    date,
    hash: SHA256(JSON.stringify(date)+'someSecret').toString()
};

/!*token.date.id = 5;
token.hash = SHA256(JSON.stringify(token.date)).toString();*!/


var resultHash = SHA256(JSON.stringify(token.date) + 'someSecret').toString();


if(resultHash === token.hash){
    console.log('Date was not changed');
}else {
    console.log('Data was changed');
}*/
