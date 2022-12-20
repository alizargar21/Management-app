const express = require("express")
// const transRoutes = require("./routes/transactions-routes")
const app = express()
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const mongoose1 = require("./mongoose")
mongoose.set("strictQuery", false)
require('dotenv').config()

app.use(bodyParser.json())
app.post("/api/trans" , mongoose1.createTrans)
app.get("/api/trans" , mongoose1.getTrans)
const port = process.env.PORT || 5000;
mongoose
  .connect(`${process.env.MONGO_URI}/management-app` , {
    useNewUrlParser : true, 
    useUnifiedTopology : true
  })
  .then(() => {
    console.log("connected");
    console.log(process.env.MONGO_URI);
    app.listen(5000)
  })

  .catch((err) => console.log("connected failed" , process.env.MONGO_URI));  