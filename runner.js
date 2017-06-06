const http = require('http');
const app = require('./application').App;

http.createServer(function (req, res) {
    var processedData = {};
    var queryData = '';

    console.log('A new request arrived with HTTP headers: ' + JSON.stringify(req.headers));

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    req.on('data', function (data) {
        queryData += data;
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (queryData.length > 1e6) {
            request.connection.destroy();
        }

        console.log(data);
        console.log(queryData);
        console.log(app);
        app.processNotification(queryData);
    });

    req.on('end', function () {});

    res.end('Hello, world! [logging sample]');
}).listen(process.env.PORT);