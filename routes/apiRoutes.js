var db = require("../models");
var bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = function(app) {
  // login page
  app.get("/user/login", function(req, res) {
    db.Userinfo.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(function(user) {
      if(!user){
        res.redirect("/")
      }else {
        bcrypt.compare(req.body.password, user.password, function(err, result){
          if(result == true){
            console.log("Welcome");
            res.redirect("/home")
          } else {
            console.log("Incorrect password");
            res.redirect("/")
          }
        })
      }
    });
  });

  // Create a new example
  app.post("/user/register", function(req,res){
    bcrypt.hash(req.body.password, saltRounds, function(err,hash){
      db.Userinfo.create({
        username: req.body.username,
        password: hash,
        email: req.body.email,
        zipcode: req.body.zipcode
      }).then(function(err, data){
        if(!err){
          console.log("successful", data)
          res.redirect("/")
        } else {
          console.log(err)
        }
      })
    })
  })
    

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

};


