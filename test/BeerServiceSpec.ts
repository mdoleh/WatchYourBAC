import {BeerService} from '../src/BeerService';
import {API_URL} from '../src/Constants';

describe("BeerService", () => {
  let beerService : BeerService;
  let mockHttp;
  
  beforeEach(() => {
	mockHttp = jasmine.createSpyObj("Http", ["get"]);
    beerService = new BeerService(mockHttp);
  });
  
  it("searchByName calls the API with name and page query string parameters page defaults to 1", () => {
    beerService.searchByName("Bud");
	expect(mockHttp.get).toHaveBeenCalledWith(API_URL + "beerByName/?name=Bud*&page=1");
  });
  
  it("searchByName calls the API with name and page query string parameters", () => {
    beerService.searchByName("Bud", 5);
	expect(mockHttp.get).toHaveBeenCalledWith(API_URL + "beerByName/?name=Bud*&page=5");
  });
  
  it("searchByName returns http GET result", () => {
	mockHttp.get = jasmine.createSpy("get").and.returnValue("mydata");
    let result = beerService.searchByName("Bud", 5);
	expect(result).toEqual("mydata");
  });
  
  it("searchById calls the API with id query string parameter", () => {
    beerService.searchById("bestbeerever");
	expect(mockHttp.get).toHaveBeenCalledWith(API_URL + "beerById?id=bestbeerever");
  });
  
  it("searchById returns http GET result", () => {
	mockHttp.get = jasmine.createSpy("get").and.returnValue("mydata");
    let result = beerService.searchById("bestbeerever");
	expect(result).toEqual("mydata");
  });
});