const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: { type: String, index: { unique: true, dropDups: true }, required: true },
})

module.exports = model('User', userSchema)
