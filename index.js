
console.log('awssecretHash');

var amazonReturn;


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
        var arr = [response.result.ItemSearchResponse.Items];
        // console.log("Raw response body: ", response.responseBody);
        amazonReturn = response.result.ItemSearchResponse.Items;
        console.log(amazonReturn);
    }).catch((err) => {
        console.error("Something went wrong! ", err);
    });

module.exports = {
    find: function(){

    }
}