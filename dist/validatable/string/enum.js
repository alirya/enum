(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/enum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const enum_1 = require("../../boolean/string/enum");
    /**
     * message for between validation
     */
    function Enum(instance) {
        return enum_1.default(instance.valid, instance.value, instance.enumerate);
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map