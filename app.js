const express = require('express');
const mongoose = require('mongoose');

const app = express();

const authRoute = require('./routes/auth.routes');

app.use('/api/auth',authRoute);
async function start() {
	try {
		await mongoose.connect('mongodb+srv://rodyans:1478963@cluster0-zufwc.azure.mongodb.net/test?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		})
		app.listen(5000, () => console.log('App has been started...'))
	} catch (e) {
		console.log('Server Error ' + e);
		process.exit(1);
	}
}

start();