const express = require('express');
const router = express.Router();

const Resources = require('../../models/Resources');

// @route   GET api/resources

// get all
router.get('/all', (req, res) => {
    Resources.find({},function(err, items) {
        if(err) {
            console.log(err);
        } 
        else {  
            res.json(items);
        }
     })
});

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

