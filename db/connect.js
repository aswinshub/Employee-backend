const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aswin1998ply:aswin123@blogapps.xlbregc.mongodb.net/blogapps?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to Blog DB')
})
.catch(()=>{

    console.log('Error ! No connection');
})




