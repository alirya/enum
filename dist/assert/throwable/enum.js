(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/enum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const enum_1 = require("../string/enum");
    function Enum(value, enumerate = '') {
        return new Error(enum_1.default(false, value, enumerate));
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map