# AmazonAPI
Backend for Wishlist API
CS 320 XML
WVUP Fall 2016
## Installing
To install, first you need to add this line in your package.json file under the dependencies
```
"amazonapi": "git+https://github.com/lcox2/AmazonAPI.git"
```

Next, run npm install and it should pull down the files and install them.

## Setup Object
```
var amazon = require("amazonapi");
```
## Setting API Key
```
Included in the code { "accessKeyId": "AKIAI7LCAK3FMX7NN47Q", "secretAccessKey": "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", "region": "us-east-1" }
Its located inside the finder file
```
##########
## Searching
```
amazon.finder(input){

}

```