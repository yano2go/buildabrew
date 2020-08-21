const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const brewSchema = new Schema({
    Brand: { type: String, required: true },
    batchSize: { type: String, required: true },
    Material: {type: String, required: true },
    Price: {type: String, required: true},
    equipmentType: {type: String, required: true}
}, { timestamps: true });


const Brew = mongoose.model('Brew', brewSchema);

module.exports = Brew;