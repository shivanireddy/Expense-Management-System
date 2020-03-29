var router = require('express').Router();
var mongoose = require('mongoose');
var Expense = require('./../models/Expense.js');

router.post('/addexpense', (req, res) => {

    var data = req.body;
    data.created = Date.now();
    var newExpense = new Expense(data);
    newExpense.save((err, result) => {
        if (err) {
            res.send(err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});

router.get('/allexpenses/:user', (req, res) => {

    Expense.find({
        user: req.params.user
    }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.get('/:id', (req, res) => {

    Expense.findById(req.params.id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.post('/delete/:id', (req, res) => {

    console.log(req.params.id)
    Expense.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    });
});

router.put('/:id/edit', (req, res) => {

    console.log(req.params.id);
    console.log(req.body);
    var promise = new Promise((resolve, reject) => {

        var data = req.body;
        console.log(data);
        data.updated = Date.now();
        console.log(data);
        Expense.findOneAndUpdate({
            _id: req.params.id
        }, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Updated :)");
            }
        });
    });

    promise.then((result) => {
            console.log(result);
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;