const mongoose = require('mongoose')


const uri = "mongodb+srv://kirtizope123:kirti%40123@cluster0.hdo7eab.mongodb.net/School"

mongoose.connect(uri)

.then(()=>{
    console.log("connection established suceessfully")
})