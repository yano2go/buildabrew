const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const descriptionSchema = new Schema({
    brand: { type: String},
    batchSize: { type: String},
    material: {type: String},
    price: {type: Number},
    equipmentType: {type: String}
}, { timestamps: true });


const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description; 