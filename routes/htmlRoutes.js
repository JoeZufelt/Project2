var db = require("../models");

module.exports = function(app) {
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
  app.get("/", function(req, res){
    res.render("index");
  });

  // profile page
  app.get("/profile", function(req, res) {
    res.render("profile");
  });

  // login page
  app.get("/login", function(req, res){
    res.render("login");
  });

  // signup page
  app.get("/signup", function(req, res){
    res.render("signup");
  });

  app.get("movies", function(req, res){
    res.render("movies");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
