const mongoose = require('mongoose');

mongoose.connect('mongodb://amuproject:FeV0pykdMKkdXTjVLQFG0ZhU4HvEohhOut5Y61DkMG6ueTE7mVBfZoFng1it4Alce57lEaOjtrHJACDb2BSfQg==@amuproject.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@amuproject@')
.then((res)=>{
    console.log("db is conected");
}).catch((err)=>{
    console.error(err + "db no conected" );
});

module.exports = mongoose;