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
    function Property(object, enumerate, value) {
        let values = Object.values(enumerate);
        for (let property in object) {
            if (!values.includes(property)) {
                return false;
            }
            else if (!value(object[property])) {
                return false;
            }
        }
        return true;
    }
    exports.default = Property;
});
//# sourceMappingURL=propery.js.map