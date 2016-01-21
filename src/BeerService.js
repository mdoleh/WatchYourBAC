System.register(['angular2/core', 'angular2/http', './Constants'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Constants_1;
    var BeerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Constants_1_1) {
                Constants_1 = Constants_1_1;
            }],
        execute: function() {
            BeerService = (function () {
                function BeerService(_http) {
                    this._http = _http;
                }
                // test to show the api call works
                BeerService.prototype.apiTest = function () {
                    // http.get returns an Observable object
                    // more info here: 
                    // https://angular.io/docs/ts/latest/api/http/Http-class.html
                    return this._http.get(Constants_1.API_URL + "?key=" + Constants_1.API_KEY);
                };
                // wildcard searching is allowed through the use of *
                BeerService.prototype.searchByName = function (beerName) {
                    var urlParams = "?name=" + beerName + "&key=";
                    return this._http.get(Constants_1.API_URL + urlParams + Constants_1.API_KEY);
                };
                BeerService.prototype.searchById = function (beerId) {
                    var urlParams = "beer/id=" + beerId + "?key=";
                    return this._http.get(Constants_1.API_URL + urlParams + Constants_1.API_KEY);
                };
                BeerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BeerService);
                return BeerService;
            })();
            exports_1("BeerService", BeerService);
        }
    }
});
//# sourceMappingURL=BeerService.js.map