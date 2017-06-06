const http = require('http');
const fs = require('fs');
const app = require('./application').App;
const NOTIFICATIONS_PATH = './data/notifications.json';

http.createServer(function (req, res) {
    var processedData,
        queryData = '';

    //console.log('A new request arrived with HTTP headers: ' + JSON.stringify(req.headers));

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    req.on('data', function (data) {
        queryData += data;
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (queryData.length > 1e6) {
            request.connection.destroy();
        }
        app.processNotification(queryData);


    });
    
    fs.readFile(NOTIFICATIONS_PATH, function (err, data) {
        if (err) {
            return;
        };
        console.log(data);
        console.log(JSON.parse(data || {}));
        processedData = JSON.parse(data || {});

        res.end(JSON.stringify(processedData));
    });
}).listen(process.env.PORT);