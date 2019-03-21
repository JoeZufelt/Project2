



module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstname: { 
      type: DataTypes.STRING,
      /*allowNull: false,*/

      validate: {
        len:[1,15],
        notEmpty: true,
        isAlphanumeric: true,
      }
    },
    lastname: {
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

  },
  description: {
    type: DataTypes.TEXT,

    validate: {
      notEmpty: true
    }
  }




});


  return User;

};
