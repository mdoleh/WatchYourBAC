var express = require('express');
var request = require('request');
var path = require('path');
var app = express();

var API_KEY = "eaba577831aa883695b4f4997a4c2980";
var API_URL = "http://api.brewerydb.com/v2/";

app.use(express.static('./'));

// any new routes will need to be updated here to ensure proper routing
app.get(['/', '/search', '/beer/*', '/consumed'], function (req, res){
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/testData/beerByName', function(req, res){
    console.log("Sending testData!");
    res.sendFile(path.resolve(__dirname, 'testData.json'));
});

app.get('/testData/beerById', function(req, res){
    console.log("Sending testDataSingleBeer!");
    res.sendFile(path.resolve(__dirname, 'testDataSingleBeer.json'));
});

app.get('/beerByName', function (req, res) {
    var beerName = req.query.name;
    var pageNumber = req.query.page;
    var queryString = "beers/?name=" + beerName + "&p=" + pageNumber + "&key=" + API_KEY;
    console.log(API_URL + queryString);
    request(API_URL + queryString, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});

app.get('/beerById', function (req, res) {
    var id = req.query.id;
    console.log(req.baseUrl);
    var queryString = "beer/" + id + "?key=" + API_KEY;
    console.log(API_URL + queryString);
    request(API_URL + queryString, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});

app.listen(8080, function () {
  console.log('API Gateway app listening on port 8080!');
});