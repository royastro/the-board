/**
 * Created by roy.astronomia on 30/01/2017.
 */
(function (controllers){

    var homeController = require('./homeController');

    controllers.init = function (app) {
        homeController.init(app);
    };

})(module.exports);