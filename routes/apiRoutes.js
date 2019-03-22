var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // login page

  app.post("/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.redirect("/movies");
  });

/*app.post("/login", function(req, res, next){
 passport.authenticate('local', {
   successRedirect: "/profile",
   failureRedirect: "/login",
   failureFlash: true
 })(req, res, next)
});*/

  // logout
  app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/")
  });

  // Create a user
  // app.post("/signup", function(req,res){
  //   var { username, password, email, zipcode} = req.body;
  //   var errors = [];

  //   //check required felds
  //    if(!username || !password || !email || !zipcode){
  //      errors.push({msg: "Please fill in all fields"})
  //    };

  //    //check password length
  //    if(password.length < 6){
  //       errors.push({msg: "Password length needs to be more than 5 characters"})
  //    };

  //    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
  //     db.User.create({
  //       username: req.body.username,
  //       password: hash,
  //       email: req.body.email,
  //       zipcode: req.body.zipcode
  //     })
  //   .then(function(){
  //    // req.flash("success_msg", "You are now registered and can log in")
  //     console.log("New user created!")
  //     res.redirect("/login")
  //   }) .catch(function(err){
  //     console.log(err)
  //     })
  //    })
      
   
  // });
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

      // app.get("/profile", function(req, res) {
      //   if (!req.User) {
      //     // The user is not logged in, send back an empty object
      //     res.redirect("/login");
      //   }
      //   else {
      //     // Otherwise send back the user's email and id
      //     // Sending back a password, even a hashed password, isn't a good idea
      //     res.send({
      //       email: req.user.email,
      //       id: req.user.id
      //     });
      //   }
      // });
    
  };


