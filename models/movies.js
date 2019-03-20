

var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: { 
      type: DataTypes.STRING,
      /*allowNull: false,*/

      validate: {
        len:[1,15],
        notEmpty: true,
        isAlphanumeric: true,
      }
    },
    password: {
      type: DataTypes.STRING,

      /*allowNull: false,*/

      validate: {
        /*len:[0,20]*/
        notEmpty: true,
      }
  },
  email: {
    type: DataTypes.STRING,

    /*allowNull: false,*/

    validate: {
      notEmpty: true,
      isEmail: true,
    }
    
  },

  zipcode: {

    type: DataTypes.INTEGER,

    /*allowNull: false,*/

    validate: {
      /*min:1,
      max:5,*/
      notEmpty: true,
      isNumeric: true,    
    }

  }
});

var Userpreference = sequelize.define("UserPreference", {

  username: {
    type: DataTypes.STRING,

    allowNull: false,

    validate: {
      len:[1,15],
      notEmpty: true,
      isAlphanumeric: true,
    }
  },
  movies: {
    type: DataTypes.STRING,

    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,

    allowNull: false,
    
    validate: {
      notEmpty: true,
      
      isAfter: "2019-03-13"
    }
  },
  time: {
    type: DataTypes.TIME,

    allowNull: false,

    validate: {
      notEmpty: true,
    }
  },
  

});

User.generatehash = function(password){
  return bcrypt.hashSync(password, genSaltSync(8), null);
};

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.localpassword)
};
  return Userpreference && User;

};
