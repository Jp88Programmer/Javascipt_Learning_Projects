const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE}`).then(() => {
  console.log('connection sucessfully...')
}).catch((err) => console.log('not connected.. \n' + err))

