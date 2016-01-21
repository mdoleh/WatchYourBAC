import {BacService} from '../src/BacService';

describe("BacService", () => {
  let bacService : BacService;
  
  beforeEach(() => {
    bacService = new BacService();
  });
  
  it("BAC should be zero with no alcohol consumed", () => {
    expect(bacService.calcBAC(0, 180, true, 2) <= 0).toBe(true);
  });
  
  it("BAC should be higher with a lighter weight person", () => {
    let bacLightWeight = bacService.calcBAC(3, 180, true, 2);
    let bacHeavyWeight = bacService.calcBAC(3, 150, true, 2);
    expect(bacLightWeight < bacHeavyWeight).toBe(true);
  });
  
  it("BAC should be lower with more time passed since drinking", () => {
    let bacLessTime = bacService.calcBAC(3, 180, true, 1);
    let bacMoreTime = bacService.calcBAC(3, 180, true, 3);
    expect(bacMoreTime < bacLessTime).toBe(true);
  });
  
  it("BAC should be higher with more alcohol consumed", () => {
    let bacLessAlcohol = bacService.calcBAC(3, 180, true, 2);
    let bacMoreAlcohol = bacService.calcBAC(5, 180, true, 2);
    expect(bacLessAlcohol < bacMoreAlcohol).toBe(true);
  });
  
  it("should compute BAC on a man", () => {
    expect(bacService.calcBAC(24, 180, true, 2)).toEqual(0.47029333333333323);
  });
  
  it("should compute BAC on a woman", () => {
    expect(bacService.calcBAC(24, 180, false, 2)).toEqual(0.4223199999999999);
  });
});