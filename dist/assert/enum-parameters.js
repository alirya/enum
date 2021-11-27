import Guard from "../boolean/enum";
import Throwable from "./throwable/enum-parameters";
/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function EnumParameters(value, enumerate, error = Throwable) {
    if (!Guard(value, enumerate)) {
        throw error(value);
    }
}
//# sourceMappingURL=enum-parameters.js.map