const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// db connection
const mongoSettings = { useNewUrlParser: true, useCreateIndex: true }
mongoose.connect('mongodb://localhost:chaz/chat-app', mongoSettings);

// app setup
app.use(morgan('combined'))
app.use(express.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});