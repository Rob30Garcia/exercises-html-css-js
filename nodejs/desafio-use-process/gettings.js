const getFlag = require('./flag');

console.log(`Oi ${getFlag('--name')}. ${getFlag('--getting')}`);

//node gettings --name "Robert Garcia" --getting "Como vai a vida?" -> utilizar no terminal