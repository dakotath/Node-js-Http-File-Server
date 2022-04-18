const { exec } = require('child_process');
const fs = require('fs');

fs.readFile(__dirname + '/main.js', (err, data) => {
    eval(data.toString());
});