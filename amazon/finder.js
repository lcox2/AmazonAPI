var util = require('util'),
    OperationHelper = require('apac').OperationHelper;

var opHelper = new OperationHelper({
    awsId: 'AKIAI7LCAK3FMX7NN47Q',
    awsSecret: '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',
    assocId: 'lcox2-20',
});



        function finder(input)
        {
            opHelper.execute('ItemSearch', {
                'SearchIndex': 'Books',
                'Keywords': input,
                'ResponseGroup': 'ItemAttributes,Offers'
            }).then((response) => {
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
                    for (var index = 0; index < arr.length; index++)
                    {
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
        }

