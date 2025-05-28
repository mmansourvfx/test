const mongoosee = require('mongoose');
const Schema = mongoosee.Schema;
const unitSchema = new Schema({
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

const Unit = mongoosee.model('Unit', unitSchema);
module.exports = Unit;