var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://adrian:1234@ds141786.mlab.com:41786/products', ['tasks']);

router.get('/products', function(req, res, next){
    db.productTV.find(function(error, products){
        if(error){
            res.send(error);
        }
        res.json(products);
    })
});

router.get('/product/:id', function(req, res, next){
    db.productTV.findOne({_id: mongojs.ObjectId(req.params.id)},function(error, product){
        if(error){
            res.send(error);
        }
        res.json(product);
    });
});

module.exports = router;