var mongoose = require(mongoose);
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name: String,
    quote: String,
}) 
mongoose.model("Users", UsersSchema);  //Mapping model to schema.
