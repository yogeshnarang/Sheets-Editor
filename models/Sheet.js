const mongoose = require('mongoose');
const sheetSchema = new mongoose.Schema({

    contentCells: [
        {
            row: {
                type: Number
            },
            col: {
                type: Number
            },
            properties: {
                type: Array
            },

        }
    ]


}, {
    timestamps: true
});

const Sheet=mongoose.model('Sheet',sheetSchema);
module.exports=Sheet;