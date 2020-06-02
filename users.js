var express = require('express');
var router = express.Router();

var fs = require('fs');
var data = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

router.get('/users', function(request, response){   
    console.log(data);
    response.header("Content-Type",'application/json');
    response.send(JSON.stringify(data, null, 4));
})

router.get('/users/:id', function(request, response){
    var single = data.filter(function(obj) {return obj.id== request.params.id});
    response.header("Content-Type",'application/json');
    response.send(JSON.stringify(single, null, 4));
   
})

module.exports = router;