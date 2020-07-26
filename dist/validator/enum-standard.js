(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./enum", "../validatable/string/enum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const enum_1 = require("./enum");
    const enum_2 = require("../validatable/string/enum");
    function EnumStandard(enumerate) {
        return new enum_1.default(enumerate, enum_2.default);
    }
    exports.default = EnumStandard;
});
//# sourceMappingURL=enum-standard.js.map