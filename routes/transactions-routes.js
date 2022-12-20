const express = require("express")


const router = express.Router()

router.get("/:tid" , (req , res , next)=> {
    const transactionId = req.params.tid
   
    res.json({message : "trans"})

})

module.exports = router