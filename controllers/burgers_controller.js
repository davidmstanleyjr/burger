const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});


// Add new burger to the burger database.
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    });
});


// burger devoured status.
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete burger from db.
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.delete(condition, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;