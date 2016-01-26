import {BacService} from '../src/BacService';
import {Person} from '../src/Person';

describe("BacService", () => {
  let bacService : BacService;
  
  beforeEach(() => {
    bacService = new BacService();
    // oz drank, body weight, genderIsMale, hours drinking
  });
  
  it("BAC should be zero with no alcohol consumed", () => {
      var person : Person = {
          bodyWeight: 180,
          gender: "Male",
          hoursDrinking: 2
      }
      bacService.init(person);
    expect(bacService.calcBAC(0) <= 0).toBe(true);
  });
  
  it("BAC should be higher with a lighter weight person", () => {
      var person : Person = {
          bodyWeight: 180,
          gender: "Male",
          hoursDrinking: 2
      }
      bacService.init(person);
    let bacLightWeight = bacService.calcBAC(3);
    person.bodyWeight = 150;
    let bacHeavyWeight = bacService.calcBAC(3);
    expect(bacLightWeight < bacHeavyWeight).toBe(true);
  });
  
  it("BAC should be lower with more time passed since drinking", () => {
      var person : Person = {
          bodyWeight: 180,
          gender: "Male",
          hoursDrinking: 1
      }
      bacService.init(person);
    let bacLessTime = bacService.calcBAC(3);
    person.hoursDrinking = 3;
    let bacMoreTime = bacService.calcBAC(3);
    expect(bacMoreTime < bacLessTime).toBe(true);
  });
  
  it("BAC should be higher with more alcohol consumed", () => {
      var person : Person = {
          bodyWeight: 180,
          gender: "Male",
          hoursDrinking: 2
      }
      bacService.init(person);
    let bacLessAlcohol = bacService.calcBAC(3);
    let bacMoreAlcohol = bacService.calcBAC(5);
    expect(bacLessAlcohol < bacMoreAlcohol).toBe(true);
  });
  
  it("should compute BAC on a man", () => {
      var person : Person = {
          bodyWeight: 180,
          gender: "Male",
          hoursDrinking: 2
      }
      bacService.init(person);
    expect(bacService.calcBAC(24)).toEqual(0.47029333333333323);
  });
  
  it("should compute BAC on a woman", () => {
      var person : Person = {
          bodyWeight: 180,
          gender: "Female",
          hoursDrinking: 2
      }
      bacService.init(person);
    expect(bacService.calcBAC(24)).toEqual(0.4223199999999999);
  });
});