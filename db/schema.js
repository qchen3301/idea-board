const Schema = require('mongoose').Schema

const IdeaSchema = new Schema({
    title: String,
    default: 'best idea ever',
    description: String,
    default: 'doge'
}) 

const UserSchema = new Schema({
    userName: String,
    password: String,
    ideas: [IdeaSchema]
})


module.exports = {
    UserSchema,
    IdeaSchema
}