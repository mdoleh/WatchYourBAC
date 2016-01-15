System.register(['src/App'], function(exports_1) {
    var App_1;
    return {
        setters:[
            function (App_1_1) {
                App_1 = App_1_1;
            }],
        execute: function() {
            describe("App", function () {
                var appComponent;
                beforeEach(function () {
                    appComponent = new App_1.App();
                });
                it("should have a name property initialized", function () {
                    expect(appComponent.name).not.toEqual("");
                });
            });
        }
    }
});
//# sourceMappingURL=AppSpec.js.map