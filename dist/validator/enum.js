import EnumValidatable from "../validatable/enum-dynamic";
import EnumString from "../validatable/string/enum";
export default function Enum(enumerate, message = EnumString) {
    return function (value) {
        return new EnumValidatable(value, enumerate, message);
    };
}
//# sourceMappingURL=enum.js.map