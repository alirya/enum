import Throwable from "./throwable/enum-parameters";
import EnumParameters from "./enum-parameters";
/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function EnumParameter(value, { enumerate, error = Throwable }) {
    EnumParameters(value, enumerate, error);
}
//# sourceMappingURL=enum-parameter.js.map