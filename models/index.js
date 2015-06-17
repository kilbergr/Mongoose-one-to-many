var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zoos_and_animals');

module.exports.Zoo = require("./zoo");
module.exports.Animal = require("./animal");