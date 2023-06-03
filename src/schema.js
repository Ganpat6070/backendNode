const mongoose = require('mongoose');

const mySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Name"]
    },
    email: {
        type: String,
        required: [true, "Please enter Email"],
        validate: {
            validator: function(emailValidate){
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(emailValidate);
            },
            message: "Please enter a valid email address"   
        }
    },
    address: {
        type: String,
        required: true,
    },
    favourites: {
        type: [String],
        required: true,
    },
    mobile: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    bloodType: {
        type: String,
        required: true
    },
})

const ClientData = mongoose.model('ClientData', mySchema);
module.exports = ClientData;