import Assert from "../assert/enum";
import Throwable from "../assert/throwable/enum";
/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function Enum(value, enumerate, error = Throwable) {
    Assert(value, enumerate, error);
    return value;
}
//# sourceMappingURL=enum.js.map