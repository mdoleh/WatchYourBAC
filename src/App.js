System.register(['angular2/core', 'src/BeerService', 'src/Constants', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, BeerService_1, Constants_1, http_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BeerService_1_1) {
                BeerService_1 = BeerService_1_1;
            },
            function (Constants_1_1) {
                Constants_1 = Constants_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(_beerService) {
                    this._beerService = _beerService;
                    this.name = "WatchYourBAC";
                    this.beers = [Constants_1.API_RESPONSE_TEMPLATE];
                }
                App.prototype.ngOnInit = function () {
                    var _this = this;
                    this._beerService.searchByName("bud*")
                        .subscribe(function (res) {
                        _this.beers = res.json().data;
                    });
                };
                ;
                App = __decorate([
                    core_1.Component({
                        selector: "app",
                        styles: ['.api-data {color: blue}'],
                        template: "\n    <label>Name:</label>\n    <input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Enter a name here\">\n    <hr>\n    <h1 [hidden]=\"!name\">Hello {{name}}!</h1>\n    <hr><br />\n    This data came from an API: \n    <div *ngFor=\"#beer of beers\" class=\"api-data\">\n      <ul>\n        <li>{{beer.nameDisplay}}</li>\n      </ul>\n    </div>\n  ",
                        // putting HTTP_PROVIDERS here doesn't seem right
                        // Http is only required by the service so why
                        // should the dependencies be injected here?
                        // look into finding an alternate place for it
                        providers: [BeerService_1.BeerService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof BeerService_1.BeerService !== 'undefined' && BeerService_1.BeerService) === 'function' && _a) || Object])
                ], App);
                return App;
                var _a;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=App.js.map