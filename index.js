
console.log('Lets get down to business 2');

console.log('hello billy!');

console.log('awssecretHash');

var amazonReturn;

// var AWS = require('aws-sdk');
// AWS.config.loadFromPath('./config.json')

// var s3 = new AWS.S3(); 

//  s3.createBucket({Bucket: 'myBucket'}, function() {

//   var params = {Bucket: 'myBucket', Key: 'myKey', Body: 'Hello!'};

//   s3.putObject(params, function(err, data) {

//       if (err)       

//           console.log(err)     

//       else       console.log("Successfully uploaded data to myBucket/myKey");   

//    });

var util = require('util'),
    OperationHelper = require('apac').OperationHelper;

var opHelper = new OperationHelper({
    awsId:     'AKIAI7LCAK3FMX7NN47Q',
    awsSecret: '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',
    assocId:   'lcox2-20',
});

opHelper.execute('ItemSearch', {
    'SearchIndex': 'Books',
    'Keywords': 'Hard Cover Harry Potter Sorcerers Stone' ,
    'ResponseGroup': 'ItemAttributes,Offers'
    }).then((response) => {
        console.log("Results object: ", response.results);
        var arr = response.result.ItemSearchResponse.Items.Item;
        // console.log("Raw response body: ", response.responseBody);
        amazonReturn = response.result.ItemSearchResponse.Items;
        console.log(arr[0].ItemAttributes.ListPrice.FormattedPrice);
        //console.log(amazonReturn[5]);
    }).catch((err) => {
        console.error("Something went wrong! ", err);
    });

module.exports = {
    find: function(){

    }
}
