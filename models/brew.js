const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const brewSchema = new Schema({
    brand: { type: String},
    batchSize: { type: String},
    material: {type: String},
    price: {type: Number},
    fermenterType: {type: String},
    brewKettleType: {type: String},
    mashTunType: {type: String},
    accessoryType: {type: String},
    additionalAccessory:{type: String},
    thirdAccessory:{type: String}
}, { timestamps: true });


const Brew = mongoose.model('Brew', brewSchema);

module.exports = Brew;  