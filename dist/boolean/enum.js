/**
 * check {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 */
export default function Enum(value, enumerate) {
    for (let data in enumerate) {
        if (value === enumerate[data]) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=enum.js.map