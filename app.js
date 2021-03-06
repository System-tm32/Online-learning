const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRoute = require('./routes/auth.routes');
const courseRoute = require('./routes/course.routes');
const app = express();

app.use(express.json({ extended: true }));
const PORT = config.get('port') || 5000;

app.use('/api/auth', authRoute);

app.use('/api/course', courseRoute);

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log('App has been started...' + PORT));
  } catch (e) {
    console.log('Server Error ' + e);
    process.exit(1);
  }
}

start();
