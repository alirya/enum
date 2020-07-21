(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/readonly-merge", "@dikac/t-value/message/callback", "../boolean/enum"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_merge_1 = require("@dikac/t-value/message/readonly-merge");
    const callback_1 = require("@dikac/t-value/message/callback");
    const enum_1 = require("../boolean/enum");
    class EnumDynamic extends readonly_merge_1.default {
        constructor(value, enumerate, message) {
            let container = {
                value: value
            };
            let msg = callback_1.default(container, () => enum_1.default(value, this.enumerate), () => message(this));
            super(container, msg, msg);
            this.enumerate = enumerate;
        }
    }
    exports.default = EnumDynamic;
});
//# sourceMappingURL=enum-dynamic.js.map