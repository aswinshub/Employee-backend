const express = require ('express');
const morgan = require ('morgan');
const app = new express();
const cors = require ('cors')
app.use(morgan('dev'));
require('dotenv').config();
const routerFile = require('../Backend/routes/addpostRoute')




app.use(cors());
app.use('/blog',routerFile)

const PORT = process.env.PORT;

app.listen(PORT,()=>{

    console.log(`Server is running ${PORT}`);
})

