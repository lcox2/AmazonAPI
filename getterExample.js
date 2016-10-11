var myModule = require('./index');

opHelper.execute('ItemSearch', {
    'SearchIndex': 'Books',
    'Keywords': 'Hard Cover Harry Potter Sorcerers Stone',
    'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
    console.log("Results object: ", response.results);
    var arr = response.result.ItemSearchResponse.Items.Item;
    amazonReturn = response.result.ItemSearchResponse.Items;
    console.log(arr[0].ItemAttributes.ListPrice.FormattedPrice);
}).catch((err) => {
    console.error("Something went wrong! ", err);
});





