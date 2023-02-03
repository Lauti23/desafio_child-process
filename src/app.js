require("dotenv").config();
const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
require("./passport/passport-local");
const MongoStore = require("connect-mongo");
const indexRoute = require("./routes/index.route");
const loginRoute = require("./routes/login.route");
const registerRoute = require("./routes/register.route");
const profileRoute = require("./routes/profile.route");
const infoRouter = require("./routes/info.route");
const morgan = require("morgan");
const flash = require("connect-flash");
const logoutRoute = require("./routes/logout.route");
const apiRandomRoute = require("./routes/apiRandoms.route");

const app = express();
require("./connection/mongodb")
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    store: MongoStore.create({mongoUrl: process.env.MONGO_SESSION_URL}),
    key: process.env.KEY,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000
    }
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())


//CONFIGURACIÓN EJS
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "public/views"));

//RUTAS
app.use("/", indexRoute)
app.use("/login", loginRoute)
app.use("/register", registerRoute)
app.use("/profile", profileRoute)
app.use("/logout", logoutRoute)
app.use("/info", infoRouter)
app.use("/api/randoms", apiRandomRoute)


app.listen(PORT, () => console.log("Server up"))