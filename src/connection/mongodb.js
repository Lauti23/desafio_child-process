const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_USERS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Database connected"))
    .catch(err => console.log(err))