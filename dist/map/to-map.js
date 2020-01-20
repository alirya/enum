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
    function ToMap(value) {
        let map = new Map();
        for (let property in value) {
            map.set(property, value[property]);
        }
        return map;
    }
    exports.default = ToMap;
});
//# sourceMappingURL=to-map.js.map