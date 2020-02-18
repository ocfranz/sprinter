const express = require("express");
const http = require("http");
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const config= require('./config/config');
dotenv.config();

const app = express();
const usersRoute = require('./routes/users');

app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
    config.connection,
    {useUnifiedTopology: true, useNewUrlParser : true,  useCreateIndex: true}
    , (err)=>{
        if(err){
            console.log('Error', err);
        }else{
            console.log('Conected');
        }
})

app.use('/user', usersRoute);

app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
