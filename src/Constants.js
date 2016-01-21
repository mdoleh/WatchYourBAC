System.register([], function(exports_1) {
    var API_URL, API_KEY, API_RESPONSE_TEMPLATE;
    return {
        setters:[],
        execute: function() {
            // we will eventually want this to point here:
            // xhr object will not allow requests from the client outside its domain
            // http://api.brewerydb.com/v2/beers
            exports_1("API_URL", API_URL = "testData.json");
            exports_1("API_KEY", API_KEY = "");
            // apparently the template will try to render and
            // access data that isn't available so a template
            // is needed so the references don't bomb out
            exports_1("API_RESPONSE_TEMPLATE", API_RESPONSE_TEMPLATE = { "message": "Request Successful", "data": { "id": "8MMa77", "name": "Bud Dry", "nameDisplay": "Bud Dry", "description": "Introduced in 1989 Bud Dry is the first dry-brewed beer produced by an American brewer. It is brewed with select hops, grains and barley malt, which results in a lighter body and less-sweet taste. As with all Anheuser-Busch beers, it is cold-filtered for a smooth draft taste, but then goes through a second cold-filtered finishing process to provide its unique taste.", "abv": "5", "styleId": 94, "isOrganic": "N", "status": "verified", "statusDisplay": "Verified", "createDate": "2012-01-03 02:42:55", "updateDate": "2015-04-08 16:48:08", "style": { "id": 94, "categoryId": 8, "category": { "id": 8, "name": "North American Lager", "createDate": "2012-03-21 20:06:46" }, "name": "American-Style Light (Low Calorie) Lager", "shortName": "American Light Lager", "description": "These beers are extremely light colored, light in body, and high in carbonation. Calorie level should not exceed 125 per 12 ounce serving. Corn, rice, or other grain or sugar adjuncts are often used. Flavor is mild and hop bitterness and aroma is negligible to very low. Light fruity esters are acceptable. Chill haze and diacetyl should be absent.", "ibuMin": "5", "ibuMax": "10", "abvMin": "3.5", "abvMax": "4.4", "srmMin": "2", "srmMax": "4", "ogMin": "1.024", "fgMin": "1.002", "fgMax": "1.008", "createDate": "2012-03-21 20:06:46", "updateDate": "2015-04-07 15:39:35" } }, "status": "success" });
        }
    }
});
//# sourceMappingURL=Constants.js.map