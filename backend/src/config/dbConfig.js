const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/gigprojects").then(() => {
    console.log("database connection established")
}).catch(err => {
    Loggers.log(err, `in connecting with database`)
});


mongoose.connection.on('open', () => {
    console.log("Connected successfully")
})
module.exports = mongoose;