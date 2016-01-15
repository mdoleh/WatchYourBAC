System.register(['src/BacService'], function(exports_1) {
    var BacService_1;
    return {
        setters:[
            function (BacService_1_1) {
                BacService_1 = BacService_1_1;
            }],
        execute: function() {
            describe("BacService", function () {
                var bacService;
                beforeEach(function () {
                    bacService = new BacService_1.BacService();
                });
                it("BAC should be zero with no alcohol consumed", function () {
                    expect(bacService.calcBAC(0, 180, true, 2) <= 0).toBe(true);
                });
                it("BAC should be higher with a lighter weight person", function () {
                    var bacLightWeight = bacService.calcBAC(3, 180, true, 2);
                    var bacHeavyWeight = bacService.calcBAC(3, 150, true, 2);
                    expect(bacLightWeight < bacHeavyWeight).toBe(true);
                });
                it("BAC should be lower with more time passed since drinking", function () {
                    var bacLessTime = bacService.calcBAC(3, 180, true, 1);
                    var bacMoreTime = bacService.calcBAC(3, 180, true, 3);
                    expect(bacMoreTime < bacLessTime).toBe(true);
                });
                it("BAC should be higher with more alcohol consumed", function () {
                    var bacLessAlcohol = bacService.calcBAC(3, 180, true, 2);
                    var bacMoreAlcohol = bacService.calcBAC(5, 180, true, 2);
                    expect(bacLessAlcohol < bacMoreAlcohol).toBe(true);
                });
                it("should compute BAC on a man", function () {
                    expect(bacService.calcBAC(24, 180, true, 2)).toEqual(0.47029333333333323);
                });
                it("should compute BAC on a woman", function () {
                    expect(bacService.calcBAC(24, 180, false, 2)).toEqual(0.4223199999999999);
                });
            });
        }
    }
});
//# sourceMappingURL=BacServiceSpec.js.map