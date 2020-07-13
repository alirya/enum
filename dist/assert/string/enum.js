(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Enum(value, enumerate, valid) {
        let string = value.toString();
        if (valid) {
            return `value "${string}" is part of enum "${enumerate}"`;
        }
        else {
            return `value "${string}" is not part of enum "${enumerate}"`;
        }
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map