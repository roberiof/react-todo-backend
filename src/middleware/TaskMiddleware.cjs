const validateTaskName = (req,res,next) =>{
  const { body } = req 

  if( ! body.name ){
    return res.status(400).json( { message: "Name of the task is required!" } )
  }

  next()
}

module.exports = {
  validateTaskName
}

// in mongoose we can solve this only with the 'require' attribute inside schema, but I implemented this so i can know how to use middlewares 