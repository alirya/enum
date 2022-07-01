import {EnumParameters as AssertEnumParameters} from '../assert/enum';
import Throwable from '../assert/throwable/enum';

/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export function EnumParameters<Enumerate extends Record<string, any>>(
    value : unknown,
    enumerate : Enumerate,
    error : (value:unknown)=>Error = Throwable.Parameters
) : Enumerate[keyof Enumerate] {

    AssertEnumParameters<Enumerate>(value, enumerate, error);

    return value;
}

export type EnumArgument<Enumerate extends Record<string, any>> = {
    enumerate : Enumerate,
    error ?: (value:unknown)=>Error,
};
/**
 * assert {@param value} is part of {@param enumerate}, if valid
 * return {@param value}
 *
 * @param value
 * @param enumerate
 * @param error
 */
export function EnumParameter<Enumerate extends Record<string, any>>(
    value : unknown,
    {
        enumerate,
        error = Throwable.Parameter,
    } : EnumArgument<Enumerate>
) : Enumerate[keyof Enumerate] {

    AssertEnumParameters<Enumerate>(value, enumerate, error);

    return EnumParameters(value, enumerate, error);
}


namespace Enum {
    export const Parameters = EnumParameters;
    export const Parameter = EnumParameter;
    export type Argument<Enumerate extends Record<string, any>> = EnumArgument<Enumerate>;
}
export default Enum;
