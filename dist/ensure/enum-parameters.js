import Assert from "../assert/enum-parameters";
import Throwable from "../assert/throwable/enum-parameters";
/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function EnumParameters(value, enumerate, error = Throwable) {
    Assert(value, enumerate, error);
    return value;
}
//# sourceMappingURL=enum-parameters.js.map