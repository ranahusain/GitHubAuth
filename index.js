const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GithubStrategy = require("passport-github2").Strategy;
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GithubStrategy({
    clientID: "ac51e75339d5e560e5defdade2c0f59bdad19aef",
  })
);
