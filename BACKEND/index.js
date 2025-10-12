const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes/index');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter)

app.listen(3000, ()=>{
    console.log('server running on port 3000')
});