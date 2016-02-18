var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render( 'index', {title: "Here are products"});

});

module.exports = router;
