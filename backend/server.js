const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port = 3000;


app.use('/', require('./routes/validationRoutes'));


app.listen(port,()=>{
    console.log(`sevrer is alive at ${port}`);
});

