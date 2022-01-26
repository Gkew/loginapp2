const mongoose = require('mongoose');
const UserSchema  = new mongoose.Schema({
  name :{
      type  : String,
      required : true
  } ,
  email :{
    type  : String,
    required : true
} ,
password :{
    type  : String,
    required : true
} ,
date :{
    type : Date,
    default : Date.now
}
});
const User= mongoose.model('User',UserSchema);


// Here's the mongoose plugin being used on a Model

    Schema = mongoose.Schema
    auditLog = require('audit-log');
 
var HumanSchema = new Schema({
    name: { type: String },
    height: { type: Number }
});
 
var pluginFn = auditLog.getPlugin('mongoose', {modelName:'Human', namePath:'name'}); // setup occurs here
HumanSchema.plugin(pluginFn.handler); // .handler is the pluggable function for mongoose in this case


module.exports = User;