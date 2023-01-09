require('dotenv').config();
const express = require('express');
const app = express();
const CryptoJS = require('crypto-js');
const server = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(server);
const os = require('os');
const logger = require('morgan');

const PORT = parseInt(process.env.PORT) || 8080;

app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));
app.use(logger('common'));

server.listen(PORT, function () {
    console.log(`Server listening on http://${os.hostname()}:${PORT}/ or http://localhost:${PORT}/`);
});

io.on('connection', function (socket) {
    let num = getRandomNumber(100000, 999999);

    socket.emit('client-num', { num: num });

    socket.on('server-auth', function (data) {
        if (data && data.encmessage) {
            console.log(`Text received: ${data.encmessage}`);
            let confirm = checkNumber(data.encmessage);
            if (confirm) {
                console.log('access granted');
            }
            else {
                console.log('access denied');
            }
            socket.emit('client-alert', { status: confirm });
        }
    });

    function checkNumber(n) {
        if (!num) return;
        let decrypted = CryptoJS.AES.decrypt(n, String(process.env.SECRET)).toString(CryptoJS.enc.Utf8);
        return parseInt(decrypted) === num;
    }
});


function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
