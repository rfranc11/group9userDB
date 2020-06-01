// Importing npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://robin224:robin224@clustercars-7vp81.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()  => {
    console.log('Mongoose is connected!');
});

//Our Schema    

const Schema =mongoose.Schema;
const CarsDBSchema= new Schema({
    make: String,
    model: String,
    type: String, 
    transmission: String,
    Numberofseats: String,
    Numberofdoors: String,
    Airbags: String,
    CDplayer: String,
});

//Our Model 
const CarsDB = mongoose.model('CarsDB', CarsDBSchema);


const data = {
    make: 'Toyota',
    model: 'Corolla',
    type: 'Sedan',
    transmission: 'Automatic',
    Numberofseats: '5',
    Numberofdoors: '4',
    Airbags: 'Yes',
    CDplayer: 'Yes',
};

const newCarsDB = new CarsDB(data);

newCarsDB.save((error) => {
    if(error) {
        console.log('Ooops, something went wrong!');
    }else {
        console.log('Data is saved!');
    }
});

app.use(morgan('tiny'));


app.get('/api', (req, res) => {
   


    CarsDB.find({ })
    .then((data) => {
        console.log('Data', data);
        res.json(data);
    })
      .catch((error) => {
          console.log('error:',dataerror);
         });
         
});
app.listen(PORT, console.log('Server is starting at 8080'));