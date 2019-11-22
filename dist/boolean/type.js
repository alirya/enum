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
    function Type(value, type) {
        for (let data in type) {
            if (value === type[data]) {
                return true;
            }
        }
        return false;
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map