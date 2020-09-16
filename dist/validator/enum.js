(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/enum-dynamic"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const enum_dynamic_1 = require("../validatable/enum-dynamic");
    /**
     * validate if given value is part of certain enumerate
     */
    class Enum {
        /**
         * @param enumerate
         * enumerate source
         *
         * @param message
         * message factory
         */
        constructor(enumerate, message) {
            this.enumerate = enumerate;
            this.message = message;
        }
        validate(value) {
            return new enum_dynamic_1.default(value, this.enumerate, this.message);
        }
    }
    exports.default = Enum;
});
//# sourceMappingURL=enum.js.map