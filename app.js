const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRoute = require('./routes/auth.routes');

const app = express();

const PORT = config.get('port') || 5000;


app.use('/api/auth',authRoute);



async function start() {
	try {
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
		app.listen(PORT, () => console.log('App has been started...' + PORT))
	} catch (e) {
		console.log('Server Error ' + e);
		process.exit(1);
	}
}

start();