const http = require('http');
const fs = require('fs');
const qs = require('querystring');
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
        if (queryData.length > 1e6) {
            request.connection.destroy();
        }
    });

    req.on('end', function () {
        var postData = qs.parse(queryData);

        if (Object.keys(postData).length) {
            console.log('processing...');
            app.processNotification(postData);
        }
        fs.readFile(NOTIFICATIONS_PATH, function (err, data) {
            if (err) {
                return;
            }

            processedData = JSON.parse(data || {});
            res.end(JSON.stringify(processedData));
        });
    });
}).listen(process.env.PORT);