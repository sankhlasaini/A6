var router = require('express').Router();
var userCtrl = require("./../user/user.controller");

router.post('/', function (req, res) {
  let user = req.body;
  try {
    if (!user) {
      res.status(201).send({ success: false, msg: 'Invaid Input' });
    } else {
      userCtrl.getUser(user.username).then((result) => {
        if (result.length > 0) {
          console.log('\nUser found checking for Credential...');
          if (result[0].password === user.password) {
            return res.status(201).send({ success: true, msg: 'User authenticated', result: result[0] });
          } else {
            return res.status(201).send({ success: false, msg: 'Password Wrong' });
          }
        } else {
          return res.status(201).send({ success: false, msg: 'User Not Found' });
        }
      }, (error) => {
        return res.status(500).send({ error: 'Failed to complete Request' });
      });
    }
  } catch (error) {
    return res.status(500).send({ error: 'Failed to complete Request' });
  }
});

module.exports = router;
