(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./enum-dynamic"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const enum_dynamic_1 = require("./enum-dynamic");
    function Enum(value, enumerate, message) {
        let enums = new enum_dynamic_1.default(value, enumerate, message);
        return enums;
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map