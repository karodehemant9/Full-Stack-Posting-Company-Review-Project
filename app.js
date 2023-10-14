const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const reviewRoutes = require('./routes/review');
const Review = require('./models/review');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/review', reviewRoutes);

app.use('/', (req, res) =>{
    res.send('Home page');
});


sequelize
.sync({force: true})
//.sync()
.then(result =>{
    app.listen(8000);
})
.catch(err =>{
    console.log(err);
})


