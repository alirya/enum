(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/enum", "./throwable/enum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const enum_1 = require("../boolean/enum");
    const enum_2 = require("./throwable/enum");
    /**
     * assert {@param value} is part of {@param enumerate}
     *
     * @param value
     * @param enumerate
     * @param error
     */
    function Enum(value, enumerate, error = enum_2.default) {
        if (!enum_1.default(value, enumerate)) {
            throw error(enumerate, value);
        }
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map