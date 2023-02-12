import Guard from '../boolean/enum.js';
import Throwable from './throwable/enum.js';
import Enumerate from '../enumerate/enumerate.js';

/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */

export function EnumParameters<Enumerate extends Record<string, any>>(
    value : unknown,
    enumerate : Enumerate,
    error : (value:unknown)=>Error = Throwable.Parameters
) : asserts value is Enumerate[keyof Enumerate] {

    if(!Guard<Enumerate>(value, enumerate)) {

        throw error(value);
    }
}

export type EnumArgument = Enumerate & {
    error ?: (value:unknown)=>Error
};
/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */

export function EnumParameter<EnumerateType extends Record<string, any>>(
    value : unknown,
    {
        enumerate,
        error = Throwable.Parameter
    } : EnumArgument
) : asserts value is EnumerateType[keyof EnumerateType] {

    EnumParameters(value, enumerate, error);
}




namespace Enum {
    export const Parameters = EnumParameters;
    export const Parameter = EnumParameter;
    export type Argument = EnumArgument;
}
export default Enum;
