import Assert from "../assert/enum-parameters";
import Throwable from "../assert/throwable/enum-parameters";
import EnumParameters from "./enum-parameters";

/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function EnumParameter<Enumerate extends Record<string, any>>(
    value : unknown,
    {
        enumerate,
        error = Throwable,
    } : {
        enumerate : Enumerate,
        error ?: (value:unknown)=>Error,
    }
) : Enumerate[keyof Enumerate] {

    Assert<Enumerate>(value, enumerate, error);

    return EnumParameters(value, enumerate, error);
}
