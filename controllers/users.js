var mongoose = require("mongoose");
//var users = mongoose.model('users');
module.exports = (function() {
    return {
        index: function(req, res) {
            if (null == req.session.counter) req.session.counter = 1;
            else req.session.counter += 1;
            // console.log("Counter = " + req.session.counter);
            return res.render("index", { counter: req.session.counter });
        },
        index2: function(req, res) {
            if (null == req.session.counter) req.session.counter = 1;
            else req.session.counter += 1;
            // console.log("Index 2: Counter = " + req.session.counter);
            res.redirect("/");
        },
        clearCounter: function(req, res) {
            req.session.counter = null;
            // console.log("CounterClear: Counter = null");
            res.redirect("/");
        }
    };
})();