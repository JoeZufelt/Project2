module.exports = function(sequelize, DataTypes) {
  var Userinfo = sequelize.define("Userinfo", {
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
  }

});
  return Userpreference && Userinfo;

};
