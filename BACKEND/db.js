const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 15
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 15
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: 3,
        maxLength: 15
    },
    passsword: {
        type: String,
        required: true,
        minLength: 8
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true,
    }
})

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);
module.exports = {
    User,
    Account
}