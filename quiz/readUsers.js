const express = require('express')
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
      return {id: user.id, username: user.username};
    });
    res.send(usernames);
  });


router.get('/username/:name', (req, res) => {
    let name = req.params.name;
    let users = req.users.filter(user => user.username === name)
  
    if (users.length === 0) {
      return res.status(404).send('User not found')
    }
  
    res.send(users)
  })

module.exports = router