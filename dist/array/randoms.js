(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-boolean/random"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const random_1 = require("@dikac/t-boolean/random");
    function Randoms(enumerate) {
        let values = [];
        for (let property in enumerate) {
            if (random_1.default()) {
                values.push(enumerate[property]);
            }
        }
        return values;
    }
    exports.default = Randoms;
});
//# sourceMappingURL=randoms.js.map