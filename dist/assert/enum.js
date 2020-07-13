(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../guard/enum", "./throwable/enum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const enum_1 = require("../guard/enum");
    const enum_2 = require("./throwable/enum");
    function Enum(value, enumerate, error = enum_2.default) {
        if (!enum_1.default(value, enumerate)) {
            throw error(enumerate, value);
        }
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map