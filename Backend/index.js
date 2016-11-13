
console.log('awssecretHash');

var amazonReturn;
var app;


var util = require('util'),
    OperationHelper = require('apac').OperationHelper;

var opHelper = new OperationHelper({
    awsId: 'AKIAI7LCAK3FMX7NN47Q',
    awsSecret: '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',
    assocId: 'lcox2-20',
});


opHelper.execute('ItemSearch', {
    'SearchIndex': 'Books',
    'Keywords': 'Harry Potter',
    'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
    console.log("Results object: ", response.results);
    //var arr = response.result.ItemSearchResponse.Items.Item;
    // console.log("Raw response body: ", response.responseBody);
    var arr = response.result.ItemSearchResponse.Items.Item;

    function data() {
        this.name = "Na";
        this.id = "NA";
        this.url = "NA";
        this.category = "NA";
        this.price = "NA";
}
    var resarr = [];
            for (var index = 0; index < arr.length; index++){
                resarr.push(new data());
                resarr[index].name = ("Name: ", arr[index].ItemAttributes.Title);
                resarr[index].id = ("Id: ", arr[index].ItemAttributes.UPC);
                resarr[index].url = ("URL: ", arr[index].DetailPageURL);
                resarr[index].category = ("Category: ", arr[index].ItemAttributes.ProductGroup);
                if(arr[index].ItemAttributes.ListPrice != undefined)
                {
                    resarr[index].price = ("Price: ", arr[index].ItemAttributes.ListPrice.FormattedPrice);
                }
                else
                {
                    resarr[index].price = "NA";
                 }
            }

    //console.log(arr[0].ItemAttributes.ListPrice.FormattedPrice);
    console.log(resarr[0].name, resarr[0].price, resarr[0].url)


    //for (var index = 0; index < arr.length; index++) {
        //console.log("Name: ", arr[index].ItemAttributes.Title);
        //console.log("Id: ", arr[index].ItemAttributes.UPC);
        //console.log("URL: ", arr[index].DetailPageURL);
        //console.log("Category: ", arr[index].ItemAttributes.ProductGroup);
        //if(arr[index].ItemAttributes.ListPrice != undefined)
        //{
            //console.log("Price: ", arr[index].ItemAttributes.ListPrice.FormattedPrice);
        //}
//}

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
    var arr = response.result.ItemSearchResponse.Items.Item;
    var resarr;

        for (var index = 0; index < arr.length; index++){
            resarr.push(new data());
            resarr[index].name = ("Name: ", arr[index].ItemAttributes.Title);
            resarr[index].id = ("Id: ", arr[index].ItemAttributes.UPC);
            resarr[index].url = ("URL: ", arr[index].DetailPageURL);
            resarr[index].category = ("Category: ", arr[index].ItemAttributes.ProductGroup);
            if(arr[index].ItemAttributes.ListPrice != undefined)
            {
                resarr[index].price = ("Price: ", arr[index].ItemAttributes.ListPrice.FormattedPrice);
            }
            else
            {
                resarr[index].price = "NA";
            }
            }


    res.send(resarr)
    res.render('main',{title:"Found" });
    });