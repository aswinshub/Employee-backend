const mongoose = require('mongoose');
const hospSchema = mongoose.Schema({
    title:String,
    post:String,
    imageURL:String,
    date_update:Date
})

const HospitalData=mongoose.model('addpostdatas',hospSchema)
module.exports = HospitalData;

