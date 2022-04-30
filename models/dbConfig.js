const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADRESS}/${process.env.DB_NAME}`, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => { 
        if(!err) console.log(`App connected to MongoDB database !`)
        else console.log(`Error connecting to MongoDB : ${err}`)
    },
)