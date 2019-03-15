var bcrypt = require("bcrypt");
var saltRounds = 10;
var mypassword = "Hello America";
var encryptedpass = "$2b$10$VWoc049Qs8IImHyNs1lk2.t/MeB7oIY88kwcwDgrqKWj7satNRLmy";

/*bcrypt.hash(mypassword, saltRounds , function(err,hash){
    if (!err){
        console.log("hash", hash)
    } else {
        console.log("error", err)
    }
});*/

bcrypt.compare(mypassword, encryptedpass, function(err,res){
    if(!err){
        console.log(res)
    } else {
        console.log("error", err)
    }
})