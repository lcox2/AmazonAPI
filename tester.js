var myModule = require('./index');

var handler = function(err, age){
    if(err){
        console.log('could not find because ' + err);
        return; 
    }
    console.log('user is ' + age);
    };
    myModule.find('aaron', handler);
    myModule.find('Annon', handler);

    var arr = [

{
    asin: 123,
    name: 'My product'
    cost:5
},
{
    asin:456,
    name: 'Your Product',
    cost: 7
}

    ]
    