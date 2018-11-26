const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./router');

app.use(morgan('combined'))
app.use(express.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});