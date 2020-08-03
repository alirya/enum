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
    function Random(enumerate) {
        let keys = Object.keys(enumerate);
        while (keys.length > 1) {
            if (random_1.default()) {
                keys.shift();
            }
        }
        let key = keys.shift();
        return enumerate[key];
    }
    exports.default = Random;
});
//# sourceMappingURL=random.js.map