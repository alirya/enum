import Assert from '../assert/enum-parameters';
import Throwable from '../assert/throwable/enum-parameters';

/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export default function EnumParameters<Enumerate extends Record<string, any>>(
    value : unknown,
    enumerate : Enumerate,
    error : (value:unknown)=>Error = Throwable
) : Enumerate[keyof Enumerate] {

    Assert<Enumerate>(value, enumerate, error);

    return value;
}
