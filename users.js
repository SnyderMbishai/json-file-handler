var express = require('express');
var router = express.Router();

var fs = require('fs');
var data = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

router.get('/users', function(request, response){    
    // response.send(data)
    console.log(data);
    response.render('users',{users: data});
})

router.get('/users/:id', function(request, response){
    var single = data.filter(function(obj) {return obj.id== request.params.id});
    response.send(single);
})

router.get('/first', function(req, res){
    res.render('users');
 });

module.exports = router;