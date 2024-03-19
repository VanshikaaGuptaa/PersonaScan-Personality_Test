const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mysllogin', {useNewUrlParser: true, useUnifiedTopology: true});

const signupSchema = new mongoose.Schema({
    id:String,
    name:String,
    recordfirst:Number,
    recordsecond:Number,
    recordthird:Number,
    recordforth:Number,
    

  });

  const signupforrecord = mongoose.model('playerrecord', signupSchema);

  module.exports=signupforrecord;
