/**
 * Created by roy.astronomia on 30/01/2017.
 */
(function (homeController){

    var data = require("../data");

    homeController.init = function (app) {

        app.get("/", function(req, res){

            data.getNoteCategories(function(err, results){
                res.render("index", {title: "Express + Vash", error: err, categories: results});
            });

        });

    };

})(module.exports);