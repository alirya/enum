(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("./boolean/type");
    function Guard(value, enumerate, error = (value) => new Error('type expect enumerate, given ' + value)) {
        if (type_1.default(value, enumerate)) {
            return value;
        }
        throw error(value);
    }
    exports.default = Guard;
});
//# sourceMappingURL=guard.js.map