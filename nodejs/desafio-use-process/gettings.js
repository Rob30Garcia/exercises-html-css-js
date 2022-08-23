const getFlag = require('./flag');

console.log(`Oi ${getFlag('--name')}. ${getFlag('--getting')}`);

//node gettings --name "Robert Garcia" --getting "Como você está?" -> utilizar no terminal