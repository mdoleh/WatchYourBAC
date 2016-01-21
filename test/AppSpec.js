System.register(['../src/AppComponent'], function(exports_1) {
    var AppComponent_1;
    return {
        setters:[
            function (AppComponent_1_1) {
                AppComponent_1 = AppComponent_1_1;
            }],
        execute: function() {
            describe("App", function () {
                var appComponent;
                beforeEach(function () {
                    appComponent = new AppComponent_1.AppComponent({});
                });
                it("should have a name property initialized", function () {
                    expect(appComponent.name).not.toEqual("");
                });
            });
        }
    }
});
//# sourceMappingURL=AppSpec.js.map