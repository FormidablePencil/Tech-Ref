const mongoose = require('mongoose')

//This discribles by what the data must adhere to for the server to accept it into db
const SchemeExample = mongoose.Schema({
  description: { //adding multiple options to one field
    type: String,
    required: true
  },
  title: String,
  number: Number,
  data: {
    type: Date,
    default: Date.now
  }
})                      

              //notice we are exporting mongoose package. This isn't just some basic js
module.exports = mongoose.model('examp', SchemeExample)
              //defined a model called users