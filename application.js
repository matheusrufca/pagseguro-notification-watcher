const logger = require('./services/logger').Logger;

var Application = (function (loggerService) {
    var self = {};
    var application = {};

    application.processNotification = function (notificationData) {
        console.log(notificationData);
        console.log(loggerService);
        loggerService.save(notificationData || {});
    }
    return application;
})(logger);

exports.App = Application;