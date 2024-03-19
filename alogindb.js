const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mysllogin', {useNewUrlParser: true, useUnifiedTopology: true});

const asignupSchema = new mongoose.Schema({
    name:String,
    staffid:Number,
    id:String,
    password:String

  });

  const alogin = mongoose.model('admin', asignupSchema);

  module.exports=alogin;
