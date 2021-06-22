var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let curdate = new Date().toISOString().slice(0, 10);
  let unixdate = Math.floor( Date.now() / 1000 );
  let output = {
      unix: new Date().getTime() / 1000,
      utc: new Date ().toUTCString()
  }
  console.log(unixdate);
  res.render('index', {
    title: 'Timestamp Microservice',
    currentdate:  curdate,
    unixdate: unixdate,
    output: JSON.stringify(output)});
});

module.exports = router;
