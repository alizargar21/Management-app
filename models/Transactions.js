
const mongoose= require("mongoose")
const transSchema =  new mongoose.Schema(
    {
        "id": {
          "type": "String" 
        },
        "title": {
          "type": "String" , "required" : true
        },
        "amount": {
          "type": "Number" , "required" : true
        },
        "description": {
          "type": "String"
        },
        "type": {
          "type": "String" , "required" : true
        },
        "createdAt": {
          "type": "String"
        },
        "date": {
          "type": "String" , "required" : true
        },
        "tags": {
          "type": "Array"
        }
      } 
    
)

module.exports = mongoose.model("TransSchema", transSchema)