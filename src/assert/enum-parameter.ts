import Throwable from './throwable/enum-parameters';
import Enumerate from '../enumerate/enumerate';
import EnumParameters from './enum-parameters';

/**
 * assert {@param value} is part of {@param enumerate}
 *
 * @param value
 * @param enumerate
 * @param error
 */

export default function EnumParameter<EnumerateType extends Record<string, any>>(
    value : unknown,
    {
        enumerate,
        error = Throwable
    } : Enumerate & {
        error ?: (value:unknown)=>Error
    }
) : asserts value is EnumerateType[keyof EnumerateType] {

    EnumParameters(value, enumerate, error);
}


