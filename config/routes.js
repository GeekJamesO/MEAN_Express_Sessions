var users = require("./../controllers/users")
module.exports = function(app) {
    app.get('/', function(req, res) {
        users.index(req, res);
    });
    app.get("/index2", function(req, res) {
        users.index2(req, res);
    });
    app.get("/clearCounter", function(req, res) {
        users.clearCounter(req, res);
    });

}