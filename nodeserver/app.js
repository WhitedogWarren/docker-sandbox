const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

const db = require('./models');
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('DB connected');
})
.catch(error => {
    console.log('db connection failed :', error);
})

//*gestion du cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//* parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//*Permet la récupération des données POST ( req.body )
app.use(express.json());

//*création des routes
    //* statique images
app.use('/images', express.static(path.join(__dirname, 'images')));

    //* controllers
const userRoute = require('./routes/user');

    //* routes
app.use('/users', userRoute);


app.use('/', (req, res) => {
    console.log('route demandée :');
    console.log(req.originalUrl);
    res.status(200).json({message: 'Aucune ressource ne correspond à votre demande'});
})

module.exports = app;