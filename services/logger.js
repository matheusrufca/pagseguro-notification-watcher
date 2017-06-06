const fs = require('fs');
var json = require('../data/notifications.json');

const NOTIFICATIONS_PATH = './data/notifications.json';

var Logger = (function (NOTIFICATIONS_PATH) {
    var self = this;
    var service = {};

    service.save = function (objData) {
        console.log(objData);

        objData.timestamp = Date.now();
        json.notifications.push(objData);
        console.log(json)
        fs.writeFile(NOTIFICATIONS_PATH, JSON.stringify(json));
    };

    return service;
})(NOTIFICATIONS_PATH);

exports.Logger = Logger;