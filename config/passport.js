var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");



// Exporting our configured passport
module.exports = passport;
