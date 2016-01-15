import {App} from 'src/App';

describe("App", () => {
  let appComponent : App;
  
  beforeEach(() => {
    appComponent = new App();
  });
  
  it("should have a name property initialized", () => {
    expect(appComponent.name).not.toEqual("");
  });
});