const bcrypt = require('bcryptjs')
const util = require('./_util')

const hashPassword = (user, options) => {
  if (!user.changed('password')) {
    return Promise.resolve()
  }

  return util.getHash(user.password).then(hash => {
    user.password = hash
  }).catch(err => {
    console.log(err)
  })
}

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [3, 100]
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  })

  User.prototype.isCorrectPassword = function (attempt) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(attempt, this.password).then(isValid => {
        if (isValid) {
          resolve()
        } else {
          reject()
        }
      }, reject)
    })
  }

  User.beforeCreate(hashPassword)
  User.beforeUpdate(hashPassword)

  return User
}
