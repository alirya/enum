(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/safe-cast", "@dikac/t-object/string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const safe_cast_1 = require("@dikac/t-string/safe-cast");
    const name_1 = require("@dikac/t-object/string/name");
    function Enum(valid, value, enumerate) {
        let string = safe_cast_1.default(value);
        let enums = name_1.default(enumerate);
        if (valid) {
            return `value "${string}" is part of enum "${enums}"`;
        }
        else {
            return `value "${string}" is not part of enum "${enums}"`;
        }
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map