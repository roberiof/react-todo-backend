const mongoose = require('mongoose')

const connectToDatabase = async () => {
  try{
    console.log('Database connected')
    await mongoose.connect(process.env.MONGODB_URI)
  } catch(error){
    console.log(`Erro: ${error.message}`)
  }
}

module.exports = connectToDatabase