import Guard from "../boolean/enum";
import Throwable from "./throwable/enum";
/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function Enum(value, enumerate, error = Throwable) {
    if (!Guard(value, enumerate)) {
        throw error(value);
    }
}
//# sourceMappingURL=enum.js.map