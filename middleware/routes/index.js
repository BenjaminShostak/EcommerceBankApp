const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);




//do this here_____________________







router.use((req, res) => {
  res.send("<h1>Wrong Way!!!</h1>")
});

module.exports = router;
