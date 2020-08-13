import Assert from "../assert/enum";
import Function from "@dikac/t-function/function";
import Throwable from "../assert/throwable/enum";

/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function Enum<Enumerate>(
    value : unknown,
    enumerate : Enumerate,
    error : Function<[Enumerate, unknown], Error> = Throwable
) : Enumerate[keyof Enumerate] {

    Assert<Enumerate>(value, enumerate, error);

    return value;
}
