const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'normal' },
    estado: { type: Boolean, default: true }

});



module.exports = model('usuario', userSchema);