const mongoose = require('mongoose')

const connectToDatabase = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database connected')
  } catch(error){
    console.log(`Erro: ${error.message}`)
  }
}

module.exports = connectToDatabase