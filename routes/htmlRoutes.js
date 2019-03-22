// var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var path = require("path");

module.exports = function (app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Userinfo.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // index page
  // app.get("/", function (req, res) {
  //   res.render("index");
  // });
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/movies");
    }
    res.render("index");
  });

  // movies page
  app.get("/movies", function (req, res) {
    if (!req.user) {
      return res.redirect("/login");
    }
    res.render("movies");
  });

  // results page
  app.get("/results", isAuthenticated, function (req, res) {
    res.render("results");
  });

  // login page
  app.get("/login", function(req, res){
    res.render("login");
  });

  // signup page
  app.get("/signup", function(req, res){
    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};
