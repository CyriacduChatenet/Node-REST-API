require('dotenv').config()
const express = require('express');
require('./models/dbConfig');
const bodyParser = require('body-parser');
const cors = require('cors');

const postRoute = require('./routes/postsRoute');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/posts', postRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})