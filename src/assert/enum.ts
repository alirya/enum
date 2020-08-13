import Guard from "../boolean/enum";
import Throwable from "./throwable/enum";
import Function from "@dikac/t-function/function";

/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */

export default function Enum<Enumerate>(
    value : unknown,
    enumerate : Enumerate,
    error : Function<[Enumerate, unknown], Error> = Throwable
) : asserts value is Enumerate[keyof Enumerate] {

    if(!Guard<Enumerate>(value, enumerate)) {

        throw error(enumerate, value);
    }
}


