var mongoose = require('mongoose');

var expenseSchema = new mongoose.Schema({

    user: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    amount: {
        type: Number
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    }
});

var Expense = module.exports = mongoose.model('Expense', expenseSchema);