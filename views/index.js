
console.log('awssecretHash');

var amazonReturn;


var util = require('util'),
    OperationHelper = require('apac').OperationHelper;

var opHelper = new OperationHelper({
    awsId: 'AKIAI7LCAK3FMX7NN47Q',
    awsSecret: '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',
    assocId: 'lcox2-20',
});

opHelper.execute('ItemSearch', {
    'SearchIndex': 'Books',
    'Keywords': 'Hard Cover Harry Potter Sorcerers Stone',
    'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
    console.log("Results object: ", response.results);
    //var arr = response.result.ItemSearchResponse.Items.Item;
    // console.log("Raw response body: ", response.responseBody);
    amazonReturn = response.result.ItemSearchResponse.Items;
    //console.log(arr[0].ItemAttributes.ListPrice.FormattedPrice);


    //for (var index = 0; index < arr.length; index++) {
        //console.log("Name: ", arr[index].ItemAttributes.Title);
        //console.log("Id: ", arr[index].ItemAttributes.UPC);
        //console.log("URL: ", arr[index].DetailPageURL);
        //console.log("Category: ", arr[index].ItemAttributes.ProductGroup);
        //if(arr[index].ItemAttributes.ListPrice != undefined)
        //{
            //console.log("Price: ", arr[index].ItemAttributes.ListPrice.FormattedPrice);
        //}
    }

}).catch((err) => {
    console.error("Something went wrong! ", err);
});

module.exports = {
    find: function () {

    }
}

app.post('api/products/search' , function(req, res){
    var_search = req.body;
    console.log(_search);

    opHelper.execute('ItemSearch', {
    'SearchIndex': 'All',
    'Keywords': _search.term,
    'ResponseGroup': 'ItemAttributes,Offers'
})

    res.send()
    res.render('main',{title:"Found" });
    });