const express = requires('express')

const app = express()
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('require')

const LocalStrategy = require('passport-local').Strategy

app.use(bodyParser.json())

app.use(cookieSession({
    name: "mysession",
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

let users = [
    {
        id: 1,
        name: "Jude",
        email: "user@email.com",
        password: "password"
    },
    {
        id: 2,
        name: "Emma",
        email: "emma@email.com",
        password: "password"
    }
]

app.post("api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).send([user, "Cannot log in", info]);
        }
        req.login(user, err => {
            res.send("Logged in");
        });
    })(req, res, next);
})

app.get("api/logout", function(req, res,){
    req.logout();
    console.log("Logged out")
    return res.send()
})

app.get("api/user", authMiddleware, (req, res) => {
    let user = users.find(user => {
        return user.id == req.sessions.passport.user
    })

    console.log([user, req.session])
    res.send
})