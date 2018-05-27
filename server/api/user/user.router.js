var router = require('express').Router();
var userCtrl = require("./user.controller");

router.get('/', function (req, res) {
  let username = req.query.username;
  console.log('Searching for ', req.query.username);
  try {
    if (!username) {
      console.log('Invalid Username');
      res.status(201).send({ success: false, msg: 'Invaid Input' });
    } else {
      userCtrl.getUser(username).then((result) => {
        console.log('User : ', result);
        if (result.length > 0) {
          console.log('\nUser found');
          return res.status(201).send({ success: true, msg: 'User Found', result: result[0] });
        } else {
          return res.status(201).send({ success: false, msg: 'User Not Found' });
        }
      }, (error) => {
        console.log('Internal error occurred');
        return res.status(500).send({ error: 'Failed to complete Request', msg: error.message });
      });
    }
  } catch (error) {
    return res.status(500).send({ error: 'Failed to complete Request' });
  }
});


router.post('/', function (req, res) {
  let user = req.body;
  console.log('Creating user', user);
  try {
    if (!user) {
      console.log('Invalid User');
      res.status(201).send({ success: false, msg: 'Invaid Input' });
    } else {
      userCtrl.createUser(user).then((result) => {
        return res.status(201).send({ success: true, msg: 'User Created' });
      }, (error) => {
        console.log('Internal error occurred', error.message);
        return res.status(500).send({ error: 'Internal error occurred, please try later..!', msg: error.message, "authToken": req.authToken });
      });
    }
  } catch (error) {
    console.log('Exception occurred' + err);
    res.send({
      error: 'Failed to complete successfully, please check the request and try again..!'
    });
  }
});


module.exports = router;
