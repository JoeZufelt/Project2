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

  // movies page
  app.get("/movies", function(req, res){
    res.render("movies");
  });

  // results page
  app.get("/results", function(req, res){
    res.render("results");
  });

  // facebook auth
 // app.get("/auth/facebook", passport.authenticate("facebook"));

  // facebook callback
  /*app.get("/auth/facebook/callback", passport.authenticate("facebook", 
  {
    successRedirect: "/",
    failureRedirect: "/login"
  })); */

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
