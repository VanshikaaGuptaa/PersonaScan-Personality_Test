const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/questions', {useNewUrlParser: true, useUnifiedTopology: true});

const quesSchema = new mongoose.Schema({
    ques:String,
    num:Number,
    category:String
    
  });

  const uques = mongoose.model('uques', quesSchema);

  module.exports=uques;
 


