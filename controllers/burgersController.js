var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([req.body.burger_name], function (result) {
        // Send back the id of the new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    burger.update(id, function (result) {
        res.status(200).end();
    });
});

// Export routes for server.js to use.
module.exports = router;
