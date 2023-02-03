const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userModel = require("../models/User")

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id)
    done(null, user)
})

passport.use("register", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await userModel.findOne({"email": email})
    console.log("Ya existe", user)
    if(user) {
        return done(null, false, req.flash("registerError", "El email esta en uso"))
    } else {
        const newUser = new userModel()
        newUser.email = email
        newUser.password = newUser.encryptPassword(password)
        console.log("Nuevo Usuario", newUser)
        await newUser.save()
        done(null, newUser)
    }
    
}))

passport.use("login", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await userModel.findOne({email: email})
    if(!user) return done(null, false, req.flash("loginError", "Este usuario no existe"))
    if(!user.comparePassword(password)) return done(null, false, req.flash("loginErrorPw", "Contraseña incorrecta"))
    done(null, user)
}))