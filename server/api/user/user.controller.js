var userModel = require("./user.entity");

var getUser = (username) => {
  return new Promise((resolve, reject) => {
    userModel.find({ username: username }, (err, res) => {
      if (err) {
        console.log('Error in Get User', err);
        reject(err);
      } else {
        console.log('Got User', res);
        resolve(res);
      }
    });
  });
};

var createUser = (user) => {
  return new Promise((resolve, reject) => {
    userModel.create(user, (err, res) => {
      if (err) {
        console.log('Error in Create User', err.message);
        reject(err);
      } else {
        console.log('User Created Successfully', res);
        resolve(res);
      }
    });
  });
}

module.exports = {
  getUser: getUser,
  createUser: createUser
};
