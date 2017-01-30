/**
 * Created by roy.astronomia on 30/01/2017.
 */
(function(data){

    var seedData = require("./seedData");

    data.getNoteCategories = function(next){
        next(null, seedData.initialNotes);
    };

})(module.exports);