const CryptoJS = require('crypto-js');

let args = process.argv.slice(2);

if (args.length === 0) {
    console.log('Provide one or more strings to hash');
    process.exit(1);
}

for (let string of args) {
    console.log(`${string.trim()}: ${CryptoJS.SHA256(string.trim()).toString(CryptoJS.enc.Hex)}`);
}