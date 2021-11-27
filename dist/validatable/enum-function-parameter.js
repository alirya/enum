import EnumParameter from "../assert/string/enum-parameter";
import EnumFunctionParameters from "./enum-function-parameters";
export default function EnumFunctionParameter({ value, enumerate, message = EnumParameter, }) {
    return EnumFunctionParameters(value, enumerate, (value, valid, enumerate) => message({ value, valid, enumerate }));
}
//# sourceMappingURL=enum-function-parameter.js.map