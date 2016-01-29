// we will eventually want this to point here:
// xhr object will not allow requests from the client outside its domain
// this is due to the fact that the API does not support CORS due to security
// http://api.brewerydb.com/v2/beers
export const API_URL = "http://localhost:8080/";
// send the app into an infinite loop causing you to reach your api limit?
// no problem! uncomment the line below to use test data instead!
// export const API_URL = "http://localhost:8080/testData/";
export const API_KEY = "";
