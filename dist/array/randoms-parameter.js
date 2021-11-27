import RandomBoolean from "@dikac/t-boolean/random";
import RandomsParameters from "./randoms-parameters";
/**
 * pick multiple enum values
 *
 * @param enumerate
 * @param random
 */
export default function RandomsParameter({ enumerate, random = RandomBoolean, }) {
    return RandomsParameters(enumerate, random);
}
//# sourceMappingURL=randoms-parameter.js.map