const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/mysllogin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define schema and model
const signupSchema = new mongoose.Schema({
    name: String,
    age: Number,
    type: String,
    id: String,
    pass: String
});

const signup = mongoose.model('user', signupSchema);

module.exports = signup;
