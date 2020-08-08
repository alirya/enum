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
    function Enum(valid, value, enumerate, valueCast, enumerateCast) {
        let messages = [];
        messages.push('value');
        if (valueCast) {
            messages.push(valueCast(value));
        }
        messages.push('is');
        if (!valid) {
            messages.push('not');
        }
        messages.push('part of enum');
        if (enumerateCast) {
            messages.push(enumerateCast(enumerate));
        }
        return messages.join(' ');
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map