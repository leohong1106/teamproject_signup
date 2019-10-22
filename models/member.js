var mongoose = require('mongoose')

const MemberSchema  = new mongoose.Schema({
    name: String, 
    id: String,
    pw: String
})

const Member = mongoose.model('Member', MemberSchema)

module.exports = Member;