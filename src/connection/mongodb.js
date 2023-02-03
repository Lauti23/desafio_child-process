const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/passportUsers", {
    useNewUrlParser: true
})
    .then(db => console.log("Database is connected"))
    .catch(err => console.log(err))