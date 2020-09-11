(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences-must"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_must_1 = require("@dikac/t-string/message/sentences-must");
    function Enum(valid, value, enumerate = '', subject = '') {
        const sentence = sentences_must_1.default(valid, [subject]);
        sentence.expect = ['value of enum', enumerate];
        return sentence.message;
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map