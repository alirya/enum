import Assert from "../assert/enum-parameters";
import Throwable from "../assert/throwable/enum-parameters";
import EnumParameters from "./enum-parameters";
/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function EnumParameter(value, { enumerate, error = Throwable, }) {
    Assert(value, enumerate, error);
    return EnumParameters(value, enumerate, error);
}
//# sourceMappingURL=enum-parameter.js.map