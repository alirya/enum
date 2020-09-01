(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = require("@dikac/t-string/message/sentence");
    function Enum(valid, value, enumerate = '', subject = '') {
        const sentence = new sentence_1.default(valid, subject, {
            invalid: 'is not value of enum',
            valid: 'is value of enum',
        }, '');
        sentence.type = enumerate;
        return sentence.message;
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map