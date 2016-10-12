var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', function(req, res){

    res.render('main', {title: "Welcome to Wishlist.net"});

});

app.post('/api/products/search', function(req, res){
    var _search=req.body;
    console.log(_search);
    res.render('main', {title: 'Got hem!'});
});

app.listen(port, function(){

    console.log('Whishlist sample on port: ' + port);

});

