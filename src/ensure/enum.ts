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
export default function Enum<Enumerate extends Record<string, any>>(
    value : unknown,
    enumerate : Enumerate,
    error : (value:unknown, enumerate:Enumerate)=>Error = Throwable
) : Enumerate[keyof Enumerate] {

    Assert<Enumerate>(value, enumerate, error);

    return value;
}
