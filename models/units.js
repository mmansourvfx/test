const mongoosee = require('mongoose');
const Schema = mongoosee.Schema;
const unitsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

const Units = mongoosee.model('Units', unitsSchema);
module.exports = Units;