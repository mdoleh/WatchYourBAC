import {AppComponent} from '../src/AppComponent';

describe("AppComponent", () => {
  let appComponent : AppComponent;
  
  beforeEach(() => {
    appComponent = new AppComponent();
  });
  
  it("has no tests", () => {
    expect(true).toBe(true);
  });
});