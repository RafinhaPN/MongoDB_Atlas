const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username:{
      type:String,
   },
   email:{
     type:String,
   },
   password:{
     type:String,
    
   },
});

const user = mongoose.model('Users',UserSchema);
module.exports = user;