var express = require('express'),
    router = express.Router(),
    Treatment = require('../model'),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

router.route('/')
  .get((req, res) => {

    Treatment.find({}, (err, treatments) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(treatments);
    });
  });

module.exports = router;
