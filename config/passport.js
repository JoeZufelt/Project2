var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt");

var db = require("../models");



// Exporting our configured passport
module.exports = passport;
