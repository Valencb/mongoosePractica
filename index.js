const express =require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');

require('./models/Persona');

mongoose.connect('mongodb://Blankm:Vmarcelo1125.@ds161322.mlab.com:61322/mongo-note');

const app= express();

app.use(bodyParser.json());

//require('./routes/personasRoutes')(app)

const personasRoutes = require('./routes/personasRoutes');
personasRoutes(app);


app.listen(5000);