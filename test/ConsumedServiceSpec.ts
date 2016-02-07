import {ConsumedService} from '../src/ConsumedService';

describe("ConsumedService", () => {
  let consumedService : ConsumedService;
  let mockSerializer;
  
  beforeEach(() => {
	mockSerializer = jasmine.createSpyObj("SerializerService", ["getData", "storeData"]);
    consumedService = new ConsumedService(mockSerializer);
  });
  
  it("getState should return a list of beers", () => {
    mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{}, {}, {}]);
	let result = consumedService.getState();
	expect(result.length).toBe(3);
  });
  
  it("getState should call getData on SerializerService", () => {
	consumedService.getState();
	expect(mockSerializer.getData).toHaveBeenCalledWith("ConsumedInfo");
  });
  
  it("removeBeer should remove a beer from the list", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1}, {id: 2}, {id: 3}]);
	consumedService.removeBeer({id: 1});
	expect(consumedService.getState().length).toBe(2);
  });
  
  it("removeBeer should remove a beer with the given index", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1}, {id: 2}, {id: 3}]);
	consumedService.removeBeer({id: 3}, 1);
	expect(consumedService.getState().map(b => b.id).indexOf(2)).toBe(-1);
  });
  
  it("removeBeer should storeData on SerializerService with updated data", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1}, {id: 2}, {id: 3}]);
	consumedService.removeBeer({id: 3}, 1);
	expect(mockSerializer.storeData).toHaveBeenCalledWith("ConsumedInfo", consumedService.getState());
  });
  
  it("updateQuantity should storeData on SerializerService with updated data", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1, quantity: 2}, {id: 2, quantity: 2}, {id: 3, quantity: 2}]);
	consumedService.updateQuantity({id: 3, quantity: 2}, 1);
	expect(mockSerializer.storeData).toHaveBeenCalledWith("ConsumedInfo", consumedService.getState());
  });
  
  it("updateQuantity should update the quantity of a beer", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1, quantity: 2}, {id: 2, quantity: 2}, {id: 3, quantity: 2}]);
	consumedService.updateQuantity({id: 3, quantity: 2}, 1);
	expect(consumedService.getState()[2].quantity).toBe(1);
  });
  
  it("updateQuantity should remove a beer if the quantity is 0", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1, quantity: 2}, {id: 2, quantity: 2}, {id: 3, quantity: 2}]);
	consumedService.updateQuantity({id: 3, quantity: 2}, 0);
	expect(consumedService.getState().map(b => b.id).indexOf(3)).toBe(-1);
  });
  
  it("updateQuantity should remove a beer if the quantity less than 0", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1, quantity: 2}, {id: 2, quantity: 2}, {id: 3, quantity: 2}]);
	consumedService.updateQuantity({id: 3, quantity: 2}, -2);
	expect(consumedService.getState().map(b => b.id).indexOf(3)).toBe(-1);
  });
  
  it("addBeer should add a beer to the list", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1}, {id: 2}, {id: 3}]);
	consumedService.addBeer({id: 4});
	expect(consumedService.getState().length).toBe(4);
  });
  
  it("addBeer should add a beer quantity defaults to 1", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1}, {id: 2}, {id: 3}]);
	consumedService.addBeer({id: 4});
	expect(consumedService.getState()[3].quantity).toBe(1);
  });
  
  it("addBeer should add a beer can set quantity", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1}, {id: 2}, {id: 3}]);
	consumedService.addBeer({id: 4}, 3);
	expect(consumedService.getState()[3].quantity).toBe(3);
  });
  
  it("addBeer should update the quantity if the beer already exists in the list", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1, quantity: 2}, {id: 2, quantity: 2}, {id: 3, quantity: 2}]);
	consumedService.addBeer({id: 3}, 3);
	expect(consumedService.getState()[2].quantity).toBe(5);
  });
  
  it("addBeer should storeData on SerializerService with updated data", () => {
	mockSerializer.getData = jasmine.createSpy("getData").and.returnValue([{id: 1, quantity: 2}, {id: 2, quantity: 2}, {id: 3, quantity: 2}]);
	consumedService.addBeer({id: 3}, 3);
	expect(mockSerializer.storeData).toHaveBeenCalledWith("ConsumedInfo", consumedService.getState());
  });
});