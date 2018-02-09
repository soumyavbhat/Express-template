var express = require('express');
var router = express.Router();

const templateTypes = [
  {
    name: "Jade",
    usefulness: "sucky"
  },
  {
    name: "EJS",
    usefulness: "better"
  },
  {
    name: "Handlebars",
    usefulness: "awesome"
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EJS', description : "easy!" , method: "k!", templates: templateTypes});
});

module.exports = router;
