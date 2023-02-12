import Validator from '@alirya/validator/simple.js';
import {Object} from 'ts-toolbelt';
import EnumMessage from '../assert/string/enum.js';
import EnumValidatable, {EnumArgumentMessage, EnumArgumentsMessage, EnumClassContext} from '../validatable/enum.js';
/**
 * validate if given value is part of certain enumerate
 */

export function EnumParameters <
    Enumerate extends object
> (
    enumerate : Enumerate,
) : Validator<unknown, Object.UnionOf<Enumerate>, string, EnumClassContext<Enumerate>>;

export function EnumParameters <
    Enumerate extends object,
    MessageT
> (
    enumerate : Enumerate,
    message : EnumArgumentsMessage<MessageT|string, Enumerate>
) : Validator<unknown, Object.UnionOf<Enumerate>, MessageT, EnumClassContext<Enumerate>>;

export function EnumParameters <
    Enumerate extends object,
    MessageT
> (
    enumerate : Enumerate,
    message : EnumArgumentsMessage<MessageT|string, Enumerate> = EnumMessage.Parameters
) : Validator<unknown, Object.UnionOf<Enumerate>, MessageT|string, EnumClassContext<Enumerate>> {

    return function<Type extends Object.UnionOf<Enumerate>, Argument extends unknown>(value: Type|Argument) {

        return new EnumValidatable.ClassParameters(value, enumerate, message);

    } as Validator<unknown, Object.UnionOf<Enumerate>, MessageT|string, EnumClassContext<Enumerate>>;
}

/**
 * validate if given value is part of certain enumerate
 */

export function EnumParameter <
    Enumerate extends Record<string, any>
> (
    enumerate : Enumerate,
) : Validator<unknown, Object.UnionOf<Enumerate>, string, EnumClassContext<Enumerate>>;

export function EnumParameter <
    Enumerate extends Record<string, any>,
    MessageT
> (
    enumerate : Enumerate,
    message : EnumArgumentMessage<MessageT|string, Enumerate>
) : Validator<unknown, Object.UnionOf<Enumerate>, MessageT, EnumClassContext<Enumerate>>;

export function EnumParameter <
    Enumerate extends Record<string, any>,
    MessageT
> (
    enumerate : Enumerate,
    message : EnumArgumentMessage<MessageT|string, Enumerate> = EnumMessage.Parameter
) : Validator<unknown, Object.UnionOf<Enumerate>, MessageT, EnumClassContext<Enumerate>> {

    return EnumParameters(
        enumerate,
        (value, valid, enumerate) => message({value, valid, enumerate})
    );
}

namespace Enum {
    export const Parameters = EnumParameters;
    export const Parameter = EnumParameter;
}
export default Enum;
