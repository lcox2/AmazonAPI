<<<<<<< HEAD
var Q = require("q");
=======

var q = require('q');
>>>>>>> df4a3fce64bf0a3f478afd10c77d5b6f4b732668
var util = require('util'),

    OperationHelper = require('apac').OperationHelper;
<<<<<<< HEAD


=======
>>>>>>> df4a3fce64bf0a3f478afd10c77d5b6f4b732668
var opHelper = new OperationHelper({
    awsId: 'AKIAI7LCAK3FMX7NN47Q',
    awsSecret: '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',
    assocId: 'lcox2-20',
});

<<<<<<< HEAD



function finder(input) {

    var deferred = Q.defer();
=======
function test(search){
    var deferred = q.defer();
    var success = true;
>>>>>>> df4a3fce64bf0a3f478afd10c77d5b6f4b732668

    opHelper.execute('ItemSearch', {
        'SearchIndex': 'All',
        'Keywords': input,
        'ResponseGroup': 'ItemAttributes,Offers,Images'
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
            this.imageURL= "NA";
        }

        setTimeout(function () {
            if (response.result.ItemSearchResponse.Items.Item[0] != undefined) {
                var resarr = [];
                for (var index = 0; index < arr.length; index++) {
                    resarr.push(new data());
                    resarr[index].name = ("Name: ", arr[index].ItemAttributes.Title);
                    resarr[index].id = ("Id: ", arr[index].ItemAttributes.UPC);
                    resarr[index].url = ("URL: ", arr[index].DetailPageURL);
                    resarr[index].category = ("Category: ", arr[index].ItemAttributes.ProductGroup);
                    if (arr[index].Offers.Offer != undefined) {
                        resarr[index].price = ("Price: ", arr[index].Offers.Offer.OfferListing.Price.FormattedPrice );
                    }
                    else if(arr[index].ItemAttributes.ListPrice != undefined){
                        resarr[index].price = ("Price: ", arr[index].ItemAttributes.ListPrice.FormattedPrice);
                    }
                    else{

                    }
                    
                    if(arr[index].MediumImage != undefined)
                    {
                        resarr[index].imageURL = (arr[index].MediumImage.URL)
                    }
                    
                    else if(arr[index].ImageSets.ImageSet[0] != undefined)
                    {
                        resarr[index].imageURL = (arr[index].ImageSets.ImageSet[0].MediumImage.URL)
                    }
                    
                    else if(arr[index].ImageSets.ImageSet != undefined)
                    {
                        resarr[index].imageURL = (arr[index].ImageSets.ImageSet.MediumImage.URL)
                    }
                    
                }

                deferred.resolve(resarr);
            }

            else {
                deferred.reject();
            }  
        }, 5000)

        
    })

    return deferred.promise;
}




var test = finder("Tamiya")

test.then(function(arr){
    console.log(arr[0].name);
    console.log(arr[0].price);
}).catch(function(){

})
console.log("Hiy")

