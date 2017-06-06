const logger = require('./services/logger').Logger;

var Application = (function (loggerService) {
    var self = {};
    var application = {};

    application.processNotification = function (notificationData) {
        console.log(notificationData);
        loggerService.save(notificationData || {});
    }
    return application;
})(logger);

exports.App = Application;