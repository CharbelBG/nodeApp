const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port = 3000;


app.use('/', require('./routes/validationRoutes'));
//setup our static folder
app.use(express.static(path.join(__dirname,'../frontend/dist')));
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'../', 'frontend', 'dist', 'index.html'))
})
app.listen(port,()=>{
    console.log(`sevrer is alive at ${port}`);
});

