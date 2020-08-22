const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const brewSchema = new Schema({
    brand: { type: String, required: true },
    batchSize: { type: String, required: true },
    material: {type: String, required: true },
    price: {type: String, required: true},
    equipmentType: {type: String, required: true}
}, { timestamps: true });


const Brew = mongoose.model('Brew', brewSchema);

module.exports = Brew;