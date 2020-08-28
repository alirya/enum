import Guard from "../boolean/enum";
import Throwable from "./throwable/enum";

/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */

export default function Enum<Enumerate extends Record<string, any>>(
    value : unknown,
    enumerate : Enumerate,
    error : (value:unknown, enumerate:Enumerate)=>Error = Throwable
) : asserts value is Enumerate[keyof Enumerate] {

    if(!Guard<Enumerate>(value, enumerate)) {

        throw error(value, enumerate);
    }
}


