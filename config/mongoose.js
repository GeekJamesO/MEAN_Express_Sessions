var mongoose = require("mongoose"); 
// This causes error... var path = require('path');
var fs = require('fs');
var models_path = path.join(__dirname, './../models');

mongoose.connect('mongodb://localhost/Counter');
fs.readdirSync(models_path).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file)
    }
})
