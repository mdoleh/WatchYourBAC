import {AppComponent} from '../src/AppComponent';

describe("App", () => {
  let appComponent : AppComponent;
  
  beforeEach(() => {
    appComponent = new AppComponent({});
  });
  
  it("should have a name property initialized", () => {
    expect(appComponent.name).not.toEqual("");
  });
});