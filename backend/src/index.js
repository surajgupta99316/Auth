const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();


app.use(cors());
app.use(express.json()); // For JSON data
app.use(express.urlencoded({ extended: true })); // For form data

app.use("/users",userRouter);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>{
    app.listen(4000, ()=> {
        console.log("Backend connected");
    });
}).catch((error)=>{console.log(error)});

