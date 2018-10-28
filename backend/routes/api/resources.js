const express = require('express');
const router = express.Router();

const Resources = require('../../models/Resources');

// @route   GET api/companies
router.get('/', (req,res) => res.send({msg: "resources Work"}));

// get all
// router.get('/all', (req, res) => {
//      Resources.find({}, function(items))
//          .populate('title')
//          .then(stocks => {
//              res.json(resources);
//          })
//          .catch(err => 
//              res.status(404).json({error: err})
//         );
// });

// server.get('/usersList', function(req, res) {
//   User.find({}, function(err, users) {
//     var userMap = {};

//     users.forEach(function(user) {
//       userMap[user._id] = user;
//     });

//     res.send(userMap);  
//   });
// });


// get a resource by id
// router.get('/all/:id', (req, res) => {
//      Stock.find({user: req.params.id})
//          .sort({symbol: 1})
//          .populate('user', ['name'])
//          .then(stocks => {
//              res.json(stocks);
//          })
//          .catch(err => 
//              res.status(404).json({error: err})
//         );
// });

// create a post
router.post('/',(req, res) => {
	console.log('req.body.title', req.body)
    const resources = {};
    resources.title = req.body.title;
    resources.link = req.body.link;
    resources.image = req.body.image;
    
    new Resources(resources).save().then(resources => res.json(resources));
});

module.exports = router;

