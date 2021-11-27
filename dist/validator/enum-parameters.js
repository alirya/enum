import EnumValidatable from "../validatable/enum-class-parameters";
import EnumString from "../assert/string/enum-parameters";
export default function EnumParameters(enumerate, message = EnumString) {
    return function (value) {
        return new EnumValidatable(value, enumerate, message);
    };
}
//# sourceMappingURL=enum-parameters.js.map