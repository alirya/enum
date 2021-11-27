import EnumString from "../assert/string/enum-parameter";
import EnumParameters from "./enum-parameters";
export default function EnumParameter(enumerate, message = EnumString) {
    return EnumParameters(enumerate, (value, valid, enumerate) => message({ value, valid, enumerate }));
}
//# sourceMappingURL=enum-parameter.js.map