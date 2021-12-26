const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

require('dotenv').config();
const MONGO_DB = process.env.MONGO_DB

mongoose.connect(MONGO_DB || "mongodb://localhost/javascriptNote", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Connection succesful")
}).catch((error) => {
    console.log(error)
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected !!!");
})