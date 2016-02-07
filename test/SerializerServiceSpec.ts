import {SerializerService} from '../src/SerializerService';

describe("SerializerService", () => {
  let serializerService : SerializerService;
  
  beforeEach(() => {
    serializerService = new SerializerService();
  });
  
  it("getData should return a deserialized object from Session Storage", () => {
	sessionStorage.setItem("test", JSON.stringify({test: "myData"}));
    let result = serializerService.getData("test");
	expect(result).toEqual({test: "myData"});
  });
  
  it("storeData should add a serialized object to Session Storage", () => {
    serializerService.storeData("test", {test: "myData"});
	expect(sessionStorage.getItem("test")).toEqual(JSON.stringify({test: "myData"}));
  });
});