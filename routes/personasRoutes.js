const mongoose = require('mongoose');

const Persona = mongoose.model('personas');

module.exports=(app) => {
	app.get('/', (req, res) => {
		res.send({ mensaje: 'aksdfjafs'});
	});

	app.get('/api/personas', async (req, res) => {
		const personas = await Persona.find({});
			res.send(personas);
	});
	
	app.post('/api/personas', async(req, res)=>{
		const {nombre, apellidos, peso, edad, ojos} = req.body;

		if(!nombre|| !apellidos|| !peso || !edad) res.send('falta informacion');
		
		const persona= new Persona({nombre, apellidos, peso, edad, ojos});
		const respuesta= await persona.save();
		res.send(respuesta);
	});

};