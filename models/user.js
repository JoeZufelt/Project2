var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {

var User = sequelize.define("User", {
  // The email cannot be null, and must be a proper email before creation
  name: { 
    type: DataTypes.STRING,
    /*allowNull: false,*/

    validate: {
      len:[1,15],
      notEmpty: true,
      isAlphanumeric: true,
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  // The password cannot be null
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

var userPost = sequelize.define("userPost", {
  name: {
    type: DataTypes.STRING,
    
    isAlphanumeric: true,
    allowNull: false,
    validate:{
      notEmpty: true,
     
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  
    unique: true,
    validate: {
      isEmail: true,
     
    }
  },
  zipcode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
    validate: {
     
      notEmpty: true,
     
    }
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      
    
    }
  },
  preference: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      
    }
  }
});
User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
User.hook("beforeCreate", function(user) {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});

  return User && userPost;

};
