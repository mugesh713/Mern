var mdb =('monggose')
var userSchema = mdb.Schema({
        firstName:String,
        lastName:String,
        email:String
})
var user_Schema=mdb.model("users",userSchema)
module.exports = user_schema