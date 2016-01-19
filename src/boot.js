System.register(['angular2/platform/browser', 'angular2/http', './App'], function(exports_1) {
    var browser_1, http_1, App_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (App_1_1) {
                App_1 = App_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(App_1.App, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map