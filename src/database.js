const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:XcKSTIbzgEWTiRkD@cluster0.mr5mii3.mongodb.net/test')
.then((res)=>{
    console.log("db is conected");
}).catch((err)=>{
    console.error(err + "db no conected" );
});

module.exports = mongoose;